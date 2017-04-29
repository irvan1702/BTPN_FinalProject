import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'app/refresh.service';
import { AppService } from 'app/app.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription'


@Component({
	selector: 'delete',
	templateUrl: 'delete.component.html'
})


export class DeleteComponent implements OnInit {

	private subscription: Subscription
	contactId;

	constructor(public dialogRef: MdDialogRef<DeleteComponent>, public dialog: MdDialog,
		private service: AppService, private refreshService: RefreshService) { }

	ngOnInit() {
		// this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
		// 	if (res.hasOwnProperty('option') && res.option === 'deleteId') {
		// 		this.contactId = res.value;
		// 	}
		// });
	}

	// doDelete() {
	// 	this.service.delete(this.contactId)
	// 		.subscribe(id => {
	// 			this.service.getAll().
	// 				subscribe(data => {
	// 					this.contacts = data;
	// 					this.deleteHidden = false;
	// 				});
	// 		});
	// }

}