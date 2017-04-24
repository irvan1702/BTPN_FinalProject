import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'employee',
	templateUrl: 'employee.component.html'
})

export class EmployeeComponent implements OnInit {
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