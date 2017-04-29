import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'app/refresh.service';
import { AppService } from 'app/app.service';
import { MdDialog, MdDialogRef } from '@angular/material';


@Component({
	selector: 'delete',
	templateUrl: 'delete.component.html'
})

export class DeleteComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<DeleteComponent>, public dialog: MdDialog,
		private service: AppService, private refreshService: RefreshService) { }

	ngOnInit() { }

	doDelete() {
}
	
}