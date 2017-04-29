import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { MdDialog } from '@angular/material';
import { FilterComponent } from 'app/filter/filter.component'
import { DeleteComponent } from 'app/delete/delete.component'
import { Subscription } from 'rxjs/Subscription';
import { RefreshService } from 'app/refresh.service';

@Component({
  selector: 'contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  name;
  contacts;
  contact;
  deleteHidden = false;
  sort = "asc";
  idContact;
  private subscription: Subscription;
  constructor(private service: AppService, public dialog: MdDialog,
    private refreshService: RefreshService) {

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(data => {
        this.contacts = data
      });
    this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'refresh') {
        this.contacts = res.value;
      }
      else if (res.hasOwnProperty('option') && res.option === 'add') {
        this.service.getAll()
          .subscribe(data => {
            this.contacts = data
          });
      }


    });
  }


  openFilterDialog() {
    let dialogRef = this.dialog.open(FilterComponent, {
      height: '400px',
      width: '600px',
    });
  }

  openDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(data =>{
      if(data=='delete'){
        this.delete(this.idContact);
      }
    })

    //this.refreshService.notifyOther({option:"deleteId", value:this.idContact});
  }

  sorting() {
    if (this.sort == "asc") {
      this.sort = "desc";
    }
    else {
      this.sort = "asc";
    }
    this.service.sortingEmployee(this.sort)
      .subscribe(result => {
        this.contacts = result;
      });
  }

  addContact() {
    this.refreshService.notifyOther({ option: 'reset', value: "" });
  }

  onChange(event) {
    this.name = event.target.value;
    this.getEmployees(this.name);
  }

  onClick(empId) {
    this.idContact=empId;
    this.service.getContactById(empId)
      .subscribe(data => {
        this.contact = data
        console.log(this.contact);
        this.refreshService.notifyOther({ option: "showToForm", value: this.contact });
      });

    this.deleteHidden = true;
  }

  delete(id) {
    this.service.delete(id)
      .subscribe(id => {
        this.service.getAll().
          subscribe(data => {
            this.contacts = data;
            this.deleteHidden = false;
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