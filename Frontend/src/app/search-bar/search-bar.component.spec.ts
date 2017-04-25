import { TestBed, inject } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('a search-bar component', () => {
	let component: SearchBarComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SearchBarComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SearchBarComponent], (SearchBarComponent) => {
		component = SearchBarComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});