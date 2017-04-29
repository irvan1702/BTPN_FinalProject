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
  employeeId=null;
  private subscription: Subscription
  constructor(private formBuilder: FormBuilder,
    private refreshService: RefreshService,
    private service: AppService,
    private datepipe: DatePipe) { }

  ngOnInit() {

    this.service.getLocations()
      .subscribe(response => {

        this.locations = response
        console.log(this.locations)
      });


    this.contactForm = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dateOfBirth: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      location: this.formBuilder.control(''),
    });
    this.photo = "src/app/no-image.png";
    this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'reset') {
        this.contactForm.reset();
      }
      else if (res.hasOwnProperty('option') && res.option === 'showToForm') {
        let data = res.value;
        let tempDate = ""
        console.log(data.dateOfBirth);
        this.employeeId=data.empId;
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
        console.log(data.photo);
        if (data.photo != null) {
          this.photo = data.photo;
        }
        else {
          this.photo = "src/app/no-image.png";
        }

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
    //console.log(employee.location);
    if (this.photo != "src/app/no-image.png" && this.photo != null) {
      employee.photo = this.photo;
      console.log(employee.photo);
    }

    if(this.employeeId == null){
    this.service.addEmployee(employee).subscribe(() => {
      this.refreshService.notifyOther({ option: 'add', value: "" });
    });
  }
  else{
     this.service.updateEmployee(this.employeeId,employee).subscribe(() => {
      this.refreshService.notifyOther({ option: 'add', value: "" });
    });
  }
  }

  chooseImage(event) {
    this.image = event.target.files;
    //console.log(this.image[0]);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.photo = event.target.result;
      //console.log(this.photo);
    }

    reader.readAsDataURL(event.target.files[0]);

  }

  onChange(location: Location) {
    console.log(this.employee);
    if (this.employee.location !== undefined) {
      this.employee.location = location;
    }
    //console.log(this.employee.location)
  }
}
