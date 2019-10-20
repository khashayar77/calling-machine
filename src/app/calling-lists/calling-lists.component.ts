import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List } from '../interfaces/list';

@Component({
	selector: 'app-calling-lists',
	templateUrl: './calling-lists.component.html',
	styleUrls: [ './calling-lists.component.scss' ]
})
export class CallingListsComponent implements OnInit {
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

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
	}
}

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
];
