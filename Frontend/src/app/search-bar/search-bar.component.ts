import { Component, OnInit } from '@angular/core';
import { ContactListComponent } from 'app/contact-list/contact-list.component'

@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	styleUrls:['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
	

	name;
		constructor(private contact:ContactListComponent) {
   
  }

	ngOnInit() { }

	onChange(event) {
    this.name = event.target.value;
    this.contact.getEmployees(this.name);
  }
}