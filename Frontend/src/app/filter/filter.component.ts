import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service'
import { MdDialogRef } from '@angular/material';
import { RefreshService } from 'app/refresh.service'
@Component({
	selector: 'filter',
	templateUrl: 'filter.component.html'
})

export class FilterComponent implements OnInit {
	genderValue;
    locationValue;
    locations;

    constructor(public dialogRef: MdDialogRef<FilterComponent>,
        private service: AppService,private refreshService:RefreshService) { }

    ngOnInit() {
        this.service.getLocations()
            .subscribe(data => {
                this.locations = data;
            });

            // this.refreshService.notifyOther({option:"genderFilter",value:this.genderValue})
            // this.refreshService.notifyOther({option:"locationFilter",value:this.locationValue})
    }

    resetFilter(){
        this.genderValue=undefined;
        this.locationValue=undefined;
    }

    
}