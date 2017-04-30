import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RefreshService } from 'app/refresh.service'
import { Subscription } from 'rxjs/Subscription';
import { AppService } from 'app/app.service';
import { DatePipe } from '@angular/common';
import { Employee } from "app/employee.model";
import { Location } from "app/location.model";
import { SafeUrl } from 'app/safeUrl.pipe';

@Component({
  selector: 'form-contact',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {
  contactForm;
  employee: Employee;
  location: Location;
  locations: Location[];
  photo;
  image;
  isShow = false;
  employeeId = null;
  private subscription: Subscription

  genderArr = ["Male", "Female"];
  gradeArr = ["SE - JP", "SE - PG", "SE - AP", "SE - AN"];
  divisionArr = ["SWD - TechOne", "CDC - TechOne", "MMS - TechOne", "CDC - Red", "CDC - Services", "MMS - Services", "SWD - Services", "SWD - Blue"];
  maritalArr = ["Single", "Married"];

  constructor(private formBuilder: FormBuilder,
    private refreshService: RefreshService,
    private service: AppService,
    private datepipe: DatePipe) { }

  ngOnInit() {

    this.service.getLocations()
      .subscribe(response => {
        this.locations = response
      });


    this.contactForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      lastName: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      gender: this.formBuilder.control('', Validators.compose([Validators.required])),
      dateOfBirth: this.formBuilder.control('', Validators.compose([Validators.required])),
      nationality: this.formBuilder.control('', Validators.compose([Validators.required])),
      maritalStatus: this.formBuilder.control('', Validators.compose([Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern(/^[0-9\(\)\-\+]{5,25}$/)])),
      subDivision: this.formBuilder.control('', Validators.compose([Validators.required])),
      status: this.formBuilder.control('', Validators.compose([Validators.required])),
      suspendDate: this.formBuilder.control('', Validators.compose([Validators.required])),
      hiredDate: this.formBuilder.control('', Validators.compose([Validators.required])),
      grade: this.formBuilder.control('', Validators.compose([Validators.required])),
      division: this.formBuilder.control('', Validators.compose([Validators.required])),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      location: this.formBuilder.control('', Validators.compose([Validators.required])),
    });
    this.photo = "src/app/no-image.png";
    this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'reset') {
        this.employeeId = null;
        this.contactForm.reset();
        this.photo = "src/app/no-image.png";
        this.isShow = true;
      }
      else if (res.hasOwnProperty('option') && res.option === 'showToForm') {
        this.isShow = true;
        let data = res.value;
        let tempDate = ""
        this.employeeId = data.empId;
        this.contactForm.controls['firstName'].setValue(data.firstName);
        this.contactForm.controls['lastName'].setValue(data.lastName);
        this.contactForm.controls['gender'].setValue(data.gender);

        var contactDob = new Date(data.dateOfBirth);
        tempDate = this.datepipe.transform(contactDob, 'yyyy-MM-dd');

        this.contactForm.controls['dateOfBirth'].setValue(tempDate);
        this.contactForm.controls['nationality'].setValue(data.nationality);
        this.contactForm.controls['maritalStatus'].setValue(data.maritalStatus);
        this.contactForm.controls['phone'].setValue(data.phone);
        this.contactForm.controls['status'].setValue(data.status);

        var contactSuspendDate = new Date(data.suspendDate);
        tempDate = this.datepipe.transform(contactSuspendDate, 'yyyy-MM-dd');
        this.contactForm.controls['suspendDate'].setValue(tempDate);

        var contactHiredDate = new Date(data.hiredDate);
        tempDate = this.datepipe.transform(contactHiredDate, 'yyyy-MM-dd');
        this.contactForm.controls['hiredDate'].setValue(tempDate);

        this.contactForm.controls['grade'].setValue(data.grade);
        this.contactForm.controls['division'].setValue(data.division);
        this.contactForm.controls['subDivision'].setValue(data.subDivision);
        this.contactForm.controls['email'].setValue(data.email);
        this.contactForm.controls['location'].setValue(data.location.id);
        if (data.photo != null) {
          this.photo = data.photo;
        }
        else {
          this.photo = "src/app/no-image.png";
        }

      }
      else if (res.hasOwnProperty('option') && res.option === 'resetForm') {
        this.employeeId = null;
        this.contactForm.reset();
        this.photo = "src/app/no-image.png";
        this.isShow = false;
      }
    }
    )
  }

  onSubmit(employee) {
    const location: Location = {
      id: employee.location,
      city: ''
    };
    employee.location = location;
    if (this.photo != "src/app/no-image.png" && this.photo != null) {
      employee.photo = this.photo;
    }

    if (this.employeeId == null) {
      this.service.addEmployee(employee).subscribe(() => {
        this.refreshService.notifyOther({ option: 'add', value: "" });
        this.contactForm.reset();
        this.photo = "src/app/no-image.png";
        this.isShow = false;
      });
    }
    else {
      this.service.updateEmployee(this.employeeId, employee).subscribe(() => {
        this.refreshService.notifyOther({ option: 'add', value: "" });
        this.contactForm.reset();
        this.photo = "src/app/no-image.png";
        this.isShow = false;
      });
    }
  }

  chooseImage(event) {
    this.image = event.target.files;

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.photo = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  onChange(location: Location) {
    if (this.employee.location !== undefined) {
      this.employee.location = location;
    }
  }
}
