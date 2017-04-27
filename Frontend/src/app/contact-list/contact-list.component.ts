import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { MdDialog } from '@angular/material';
import { FilterComponent } from 'app/filter/filter.component'

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  employees;
  name;
  id;
  contacts;
  sort = "asc";
  query = "";
  show = false;
  edited = false;
  selectedEmployee = null;
  locationFilter = "";
  genderFilter = ""
  constructor(private service: AppService, public dialog: MdDialog) {

  }


  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(FilterComponent, {
      height: '400px',
      width: '600px',
    });
    if (this.genderFilter != "") {
      dialogRef.componentInstance.gender = this.genderFilter;
      dialogRef.componentInstance.tempGender = this.genderFilter;
    }
    if (this.locationFilter != "") {
      dialogRef.componentInstance.location = this.locationFilter;
      dialogRef.componentInstance.tempLocation = this.locationFilter;
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        if (result.action == "filter") {
          this.locationFilter = result.locValue;
          this.genderFilter = result.genderValue;
          this.getEmployees(name);
        }
      }

    });

  }

  sorting() {

  }
  
  addContact(){
    
  }

  onChange(event) {
    this.name = event.target.value;
    this.getEmployees(this.name);
  }
  onClick(contact) {
    console.log(contact);
    this.service.getContactById(contact.empId)
      .subscribe(contacts => this.contacts = contact);
  }
  delete() {
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

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: './test.html',
// })
// export class DialogOverviewExampleDialog {}