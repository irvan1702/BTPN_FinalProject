import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service'

@Component({
	selector: 'contact-list',
	templateUrl: 'contact-list.component.html',
	styleUrls:['contact-list.component.css']
})

export class ContactListComponent implements OnInit {

employees;
show;
name;
id;
contacts;
	constructor(private service:AppService) {
   
  }

  
	ngOnInit() {
	  this.service.getAll().subscribe(data => {
      this.contacts = data;
	  console.log(this.contacts);
    });
	 }

	 onChange(event) {
    this.name = event.target.value;
    this.getEmployees(this.name);
  }
  onClick(contact){
    console.log(contact);
    this.service.getContactById(contact.empId)
    .subscribe(contacts => this.contacts=contact);
  }
  delete(){
    this.service.delete(50)
      .subscribe(contacts => {
        this.service.getAll().subscribe(data => {
        this.contacts = data;
      });
      console.log(this.contacts);

      
	  //console.log(this.contacts);
    });
  }
	 
	 getEmployees(name) {
    this.service.searchName(name)
      .subscribe(contacts => {
        this.contacts = contacts;
        if (this.contacts.length == 0) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
  }
}