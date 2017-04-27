import { Component, OnInit, Inject } from '@angular/core';
import { lookupListToken } from 'app/provides'
import { AppService } from 'app/app.service'
import { MdDialogRef } from '@angular/material';
@Component({
	selector: 'filter',
	templateUrl: 'filter.component.html'
})

export class FilterComponent implements OnInit {
	genderMaleChecked; //false => disabled; true => enabled
    genderFemaleChecked; // false => disabled; true => enabled
    gender = "";
    tempGender = "";
    location = "";
    tempLocation = "";
	checked=false;
    constructor(public dialogRef: MdDialogRef<FilterComponent>,
        private locationService: AppService,
        @Inject(lookupListToken) public lookupLists) { }
    locations;

    ngOnInit() {
        this.locationService.getAll()
            .subscribe(locations => {
                this.locations = locations;
            });
    }

	maleFilter(event){
		this.genderMaleChecked=event.value;
	}
	doFilter(){
		this.dialogRef.close
	}
}