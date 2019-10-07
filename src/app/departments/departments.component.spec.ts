import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsComponent } from './departments.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

describe('DepartmentsComponent', () => {
	let component: DepartmentsComponent;
	let fixture: ComponentFixture<DepartmentsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ RouterModule, MatCardModule ],
				declarations: [ DepartmentsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DepartmentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
