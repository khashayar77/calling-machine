import {Component} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';
import { PeriodicElement } from '../interface/department';


export interface Num {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  name = 'Angular';
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  onChangeHour(event) {
    console.log('event', event);
  }

    // tslint:disable-next-line: member-ordering
    num: Num[] = [
      {value: '0', viewValue: '0'},
      {value: '1', viewValue: '1'},
    ];





  formGroup: FormGroup;
	constructor(private authService: AuthService, private snackbar: MatSnackBar) {
		this.formGroup = new FormGroup({
      id: new FormControl({value: '', disabled: true}, [ Validators.required]),
      enable: new FormControl('1', [Validators.required]),
      priority: new FormControl('', [ Validators.required]),
      department: new FormControl('', [ Validators.required]),
      start_working_time: new FormControl(''),
      end_working_time: new FormControl(''),
      nwd_table_id: new FormControl({value: '', disabled: true}),
      dialplan_context: new FormControl(''),
      queue: new FormControl(''),
      url_id: new FormControl(''),
      call_more: new FormControl(''),
      retry_time: new FormControl(''),
		});
	}
  edit() {
    if (this.formGroup.invalid) { return this.snackbar.open(' اطلاعات کامل نیست', null, { duration: 999 }); }

    else  {(this.formGroup.valid)} return this.snackbar.open('اطلاعات ثبت شد ', null, {duration : 999}

    )

		this.authService.login(this.formGroup.value).subscribe(
			(resData) => {
				console.log(resData);
			},
			(errorMessage) => {
				this.snackbar.open('noch', null, { duration: 999 });
				console.log(errorMessage);
			}
		);
	}
}



