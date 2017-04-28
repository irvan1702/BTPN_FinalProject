import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { RefreshService } from 'app/refresh.service'

@Component({
	selector: 'form-contact',
	templateUrl: 'form.component.html',
	styleUrls:['form.component.css']
})

export class FormComponent implements OnInit {
	contactForm

	constructor(private formBuilder:FormBuilder,
	 private refreshService: RefreshService){}

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
	 }
}