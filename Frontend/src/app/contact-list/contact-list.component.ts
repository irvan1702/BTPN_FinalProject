import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'contact-list',
	templateUrl: 'contact-list.component.html'
})

export class ContactListComponent implements OnInit {
	contacts = [
		{
			name:'Bro',
			phone:'2456135'
		},
		{
			name:'Bro2',
			phone:'24561352'
		}
	]

	ngOnInit() { }
}