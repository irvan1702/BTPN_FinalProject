import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { MdDialog } from '@angular/material';
import { FilterComponent } from 'app/filter/filter.component'
import { Subscription } from 'rxjs/Subscription';
import { RefreshService } from 'app/refresh.service';

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  name;
  id;
  contacts;
  sort = "asc";
  private subscription: Subscription;
  constructor(private service: AppService, public dialog: MdDialog, 
  private refreshService: RefreshService) {

  }


  ngOnInit() {
    this.service.getAll()
      .subscribe(data => {
        this.contacts = data
      });
  }
  

  openDialog() {
    let dialogRef = this.dialog.open(FilterComponent, {
      height: '400px',
      width: '600px',
    });
    // if (this.genderFilter != "") {
    //   dialogRef.componentInstance.gender = this.genderFilter;
    //   dialogRef.componentInstance.tempGender = this.genderFilter;
    // }
    // if (this.locationFilter != "") {
    //   dialogRef.componentInstance.location = this.locationFilter;
    //   dialogRef.componentInstance.tempLocation = this.locationFilter;
    // }
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result != undefined) {
    //     if (result.action == "filter") {
    //       this.locationFilter = result.locValue;
    //       this.genderFilter = result.genderValue;
    //       this.getEmployees(name);
    //     }
    //   }

    // });
  }

  sorting() {
    if (this.sort == "asc") {
      this.sort = "desc";
    }
    else {
      this.sort = "asc";
    }
    this.service.sortingEmployee(this.sort)
      .subscribe(result =>{
        this.contacts = result;
      });
  }

  addEmployee() {

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
  delete(id) {
    this.service.delete(id)
      .subscribe(contacts => {
        this.service.getAll().subscribe(data => {
          this.contacts = data;
        });
      });
  }

  getEmployees(name) {
    this.service.searchName(name)
      .subscribe(contacts => {
        this.contacts = contacts;
        // if (this.contacts.length == 0) {
        //   this.show = true;
        // } else {
        //   this.show = false;
        // }
      });
  }
}