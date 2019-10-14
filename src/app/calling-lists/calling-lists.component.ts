import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
<<<<<<< HEAD
import { MatTableDataSource } from '@angular/material/table';
import { List } from '../interfaces/list';
=======
import { MatTableDataSource, MatSort } from '@angular/material';
import { CallResult } from '../interfaces/CallResult';
>>>>>>> e78d1f841f5a24d6c9175298d7a2ffb8ed7a6530

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent implements OnInit {
<<<<<<< HEAD
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource<List>(ELEMENT_DATA);
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = [
    'CustomerID',
    'department',
    'URL_id',
    'numberOfCall',
    'numberOfDailed',
    'status',
    'action'
  ];

  selectedDepartment: List;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  onselect(id: number) {
    console.log(id);
  }
=======
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
		'Info1'
	];

	@ViewChild(MatSort, { static: false })
	sort: MatSort;

	selectedDepartment: CallResult;

	onselect(id: number) {
		console.log(id);
	}
>>>>>>> e78d1f841f5a24d6c9175298d7a2ffb8ed7a6530

	@ViewChild(MatPaginator, { static: true })
	paginator: MatPaginator;

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}
}

<<<<<<< HEAD
const ELEMENT_DATA: List[] = [
  {
    CustomerID: 1,
    department: 'qm-pcs',
    URL_id: 122,
    numberOfCall: 1500,
    numberOfDailed: 500,
    status: 'run'
  },
  {
    CustomerID: 2,
    department: 'qm-pcs',
    URL_id: 234,
    numberOfCall: 3000,
    numberOfDailed: 1000,
    status: 'run'
  }
=======
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
>>>>>>> e78d1f841f5a24d6c9175298d7a2ffb8ed7a6530
];
