import { TestBed, inject } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';

describe('a navigation component', () => {
	let component: NavigationComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NavigationComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NavigationComponent], (NavigationComponent) => {
		component = NavigationComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});