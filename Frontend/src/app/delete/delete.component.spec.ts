import { TestBed, inject } from '@angular/core/testing';

import { DeleteComponent } from './delete.component';

describe('a delete component', () => {
	let component: DeleteComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DeleteComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([DeleteComponent], (DeleteComponent) => {
		component = DeleteComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});