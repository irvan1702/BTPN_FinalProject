import { TestBed, inject } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';

describe('a contact-list component', () => {
	let component: ContactListComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ContactListComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ContactListComponent], (ContactListComponent) => {
		component = ContactListComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});