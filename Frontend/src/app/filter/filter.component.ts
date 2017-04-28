import { Component, OnInit, Inject } from '@angular/core';
import { lookupListToken } from 'app/provides'
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
        private service: AppService,private refreshService:RefreshService,
        @Inject(lookupListToken) public lookupLists) { }

    ngOnInit() {
        this.service.getLocations()
            .subscribe(data => {
                this.locations = data;
                console.log(this.locations);
            });
            
    }

	doFilter(){
        if(this.genderValue===undefined && this.locationValue===undefined){
            this.dialogRef.close;
        }
        else if(this.genderValue!==undefined && this.locationValue===undefined){
            this.dialogRef.close;
            this.service.filterByGender(this.genderValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
            });
        }
        else if(this.genderValue===undefined && this.locationValue!==undefined){
            this.dialogRef.close;
            this.service.filterByLocation(this.locationValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
            });
        }
        else{
             this.dialogRef.close;
            this.service.filterByLocationAndGender(this.locationValue,this.genderValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
            });
        }
        
	}
    
}