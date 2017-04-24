import { TestBed, inject } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';

describe('a employee component', () => {
	let component: EmployeeComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EmployeeComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([EmployeeComponent], (EmployeeComponent) => {
		component = EmployeeComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});