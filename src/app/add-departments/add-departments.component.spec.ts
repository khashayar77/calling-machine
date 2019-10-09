import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentsComponent } from './add-departments.component';
import {
	MatCardModule,
	MatOptionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatSnackBarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddDepartmentsComponent', () => {
	let component: AddDepartmentsComponent;
	let fixture: ComponentFixture<AddDepartmentsComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [
					MatCardModule,
					ReactiveFormsModule,
					MatOptionModule,
					MatSelectModule,
					MatFormFieldModule,
					TranslateModule.forRoot(),
					HttpClientModule,
					RouterModule,
					RouterTestingModule,
					MatSnackBarModule
				],
				declarations: [ AddDepartmentsComponent ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(AddDepartmentsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
