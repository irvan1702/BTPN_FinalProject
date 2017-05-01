import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'app/refresh.service';
import { AppService } from 'app/app.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription'


@Component({
	selector: 'delete',
	templateUrl: 'delete.component.html',
	styleUrls: ['delete.component.css']
})


export class DeleteComponent implements OnInit {
	fullName;
	private subscription: Subscription
	contactId;

	constructor(public dialogRef: MdDialogRef<DeleteComponent>, public dialog: MdDialog,
		private service: AppService, private refreshService: RefreshService) {
		this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
			if (res.hasOwnProperty('option') && res.option === 'showName') {
				this.fullName = res.value;
			}
		});
	}

	ngOnInit() {

	}

}