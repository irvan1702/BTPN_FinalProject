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
  show;
  gender;
  location;
  selected
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

    if (this.gender != "") {
      dialogRef.componentInstance.genderValue = this.gender;
    }
    if (this.location != "") {
      dialogRef.componentInstance.locationValue = this.location;
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        if (result.action == "filter") {
          this.location = result.locValue;
          this.gender = result.genderValue;

          if (this.gender === undefined && this.location === undefined) {
            console.log(result.locValue);
            this.service.getAll()
              .subscribe(data => {
                this.contacts = data
                this.show=false;
              });
          }

          else if (this.gender !== undefined && this.location === undefined) {
            this.service.filterByGender(this.gender).subscribe(data => {
              this.contacts = data;
              if (this.contacts.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
          }

          else if (this.gender === undefined && this.location !== undefined) {
            this.service.filterByLocation(this.location).subscribe(data => {
              this.contacts = data;
              if (this.contacts.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
          }

          else {
            this.service.filterByLocationAndGender(this.location, this.gender).subscribe(data => {
              this.contacts = data;
              if (this.contacts.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
          }
        }
      }

    });
  }

  openDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data == 'delete') {
        this.delete(this.idContact);
      }
    })
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
    this.idContact = empId;
    this.service.getContactById(empId)
      .subscribe(data => {
        this.contact = data
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
      this.refreshService.notifyOther({ option: "resetForm", value: "" });
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
  setImage(contact) {
    if (contact.photo == null) {
      return "src/app/no-image.png";
    } else {
      return contact.photo;
    }
  }

  isSelected(selected){
    let flag = true;
    if(this.contact!=null && selected!=null){
      if(this.idContact===selected.empId){
        flag=false;
      }
    }
    return flag;
  }
}