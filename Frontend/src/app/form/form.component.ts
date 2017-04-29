import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RefreshService } from 'app/refresh.service'
import { Subscription } from 'rxjs/Subscription';
import { AppService } from 'app/app.service'

@Component({
  selector: 'form-contact',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit {
  contactForm

  private subscription: Subscription
  constructor(private formBuilder: FormBuilder,
    private refreshService: RefreshService, private service:AppService) { }

  ngOnInit() {

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

    this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'reset') {
        this.contactForm.reset();
      }
      else if (res.hasOwnProperty('option') && res.option === 'showToForm') {
        let data=res.value;
        console.log(data);
        this.contactForm.controls['firstName'].setValue(data.firstName);
        this.contactForm.controls['lastName'].setValue(data.lastName);
        this.contactForm.controls['gender'].setValue(data.gender);
        this.contactForm.controls['dateOfBirth'].setValue(data.dateOfBirth);
        this.contactForm.controls['nationality'].setValue(data.nationality);
        this.contactForm.controls['maritalStatus'].setValue(data.maritalStatus);
        this.contactForm.controls['phone'].setValue(data.phone);
        this.contactForm.controls['status'].setValue(data.status);
        //this.contactForm.controls['suspendDate'].setValue(data.suspendDate);
        //this.contactForm.controls['hiredDate'].setValue(data.hiredDate);
        this.contactForm.controls['grade'].setValue(data.grade);
        this.contactForm.controls['division'].setValue(data.division);
        this.contactForm.controls['subDivision'].setValue(data.subDivision);
        this.contactForm.controls['email'].setValue(data.email);
        //this.contactForm.controls['location'].setValue(data.location);

      }
    }
    )
  }

  onSubmit(formValue){
    this.service.addEmployee(formValue).subscribe(()=>{
                this.refreshService.notifyOther({ option: 'add', value: "" });
            });
  }
}