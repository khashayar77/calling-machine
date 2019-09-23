import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { from } from 'rxjs';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  displayedColumns: string[] = ['id','enable','priority','department','start_working_time',
  'end_working_time', 'nwd_table_id','dialplan_context','queue','query_method','url_id',
  'call_more', 'retry_time']
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  enable: number;
  priority: number;
  department: string;
  start_working_time: string;
  end_working_time: string;
  nwd_table_id: number;
  dialplan_context: string;
  queue: string;
  query_method: string;
  url_id: number;
  call_more: number;
  retry_time: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  },
  {
    id: 1,
    enable: 1,
    priority: 7,
    department: "qm-pcs",
    start_working_time: "8:00:00",
    end_working_time: "17:50:00",
    nwd_table_id: 1,
    dialplan_context: "calling-machine-cmqm1-start",
    queue: "cmqm1",
    query_method: "QS1",
    url_id: 3,
    call_more: 1,
    retry_time: 180,
  }
]