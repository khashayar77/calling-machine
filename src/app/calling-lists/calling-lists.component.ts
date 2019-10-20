import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CallResult } from '../interfaces/CallResult';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent implements OnInit {
	dataSource = new MatTableDataSource<CallResult>(ELEMENT_DATA);
	displayedColumns: string[] = [
		'Customer_ID',
		'Number',
		'Department',
		'URL_ID',
		'Add_Date',
		'Retry_Time',
		'Lock_Call',
		'Attempt',
		'Call_Status',
		'Call_Duration',
		'Info1',
		'action'
	];

	IdFilter = new FormControl();
	NumberFilter = new FormControl();
	DepartmentFilter = new FormControl();
	AddDateFilter = new FormControl();
	CallStatusFilter = new FormControl();

	filteredValues = { Customer_ID: '', Number: '', Department: '', Add_Date: '', Call_Status: '' };

	@ViewChild(MatSort, { static: false })
	sort: MatSort;

	selectedDepartment: CallResult;

	onselect(id: number) {
		console.log(id);
	}

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;

		this.IdFilter.valueChanges.subscribe((IdFilterValue) => {
			this.filteredValues['Customer_ID'] = IdFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.NumberFilter.valueChanges.subscribe((NumberFilterValue) => {
			this.filteredValues['Number'] = NumberFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.DepartmentFilter.valueChanges.subscribe((DepartmentFilterValue) => {
			this.filteredValues['Department'] = DepartmentFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});
		this.AddDateFilter.valueChanges.subscribe((AddDateFilterValue) => {
			this.filteredValues['Add_Date'] = AddDateFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.CallStatusFilter.valueChanges.subscribe((CallStatusFilterValue) => {
			this.filteredValues['Call_Status'] = CallStatusFilterValue;
			this.dataSource.filter = JSON.stringify(this.filteredValues);
		});

		this.dataSource.filterPredicate = this.customFilterPredicate();
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
		this.dataSource.filter = filterValue;
	}

	customFilterPredicate() {
		const myFilterPredicate = function(data: CallResult, filter: string): boolean {
			let searchString = JSON.parse(filter);
			return (
				data.Customer_ID.toString().trim().indexOf(searchString.Customer_ID) !== -1 &&
				data.Number.toString().trim().indexOf(searchString.Number) !== -1 &&
				data.Department.toString().trim().toLowerCase().indexOf(searchString.Department.toLowerCase()) !== -1 &&
				data.Call_Status.toString().trim().indexOf(searchString.Call_Status) !== -1 &&
				data.Add_Date.toString().trim().indexOf(searchString.Add_Date) !== -1
			);
		};
		return myFilterPredicate;
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}
}

const ELEMENT_DATA: CallResult[] = [
	{
		Customer_ID: 4585545,
		Number: 9124756485,
		Department: 'qm-pcs',
		URL_ID: 75807,
		Add_Date: new Date(2019, 7, 21),
		Retry_Time: 180,
		Lock_Call: 1,
		Attempt: 0,
		Call_Status: 1,
		Call_Duration: 30,
		Info1: ''
	},
	{
		Customer_ID: 456478,
		Number: 9124756487,
		Department: 'qm-pc',
		URL_ID: 757,
		Add_Date: new Date(2019, 8, 12),
		Retry_Time: 260,
		Lock_Call: 0,
		Attempt: 2,
		Call_Status: 0,
		Call_Duration: 50,
		Info1: ''
	}
];
