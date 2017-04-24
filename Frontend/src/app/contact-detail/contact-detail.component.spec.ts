import { TestBed, inject } from '@angular/core/testing';

import { ContactDetailComponent } from './contact-detail.component';

describe('a contact-detail component', () => {
	let component: ContactDetailComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ContactDetailComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ContactDetailComponent], (ContactDetailComponent) => {
		component = ContactDetailComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});