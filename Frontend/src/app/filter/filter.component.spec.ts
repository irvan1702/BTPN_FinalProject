import { TestBed, inject } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('a filter component', () => {
	let component: FilterComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				FilterComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([FilterComponent], (FilterComponent) => {
		component = FilterComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});