import {  Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MOCK_admin_user } from '../data/list-mock';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { JsonPipe } from '@angular/common';


const LOCAL_STORAGE_KEY = 'Upload';

@Injectable({
  providedIn: 'root'
})

export class Uploadfile
{

  Upload = new BehaviorSubject<'Upload'>(null);

  constructor( private http: HttpClient )
  {
    var stringifiedUpload = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(stringifiedUpload)
    {
      const Upload = JSON.parse(stringifiedUpload);
      this.Upload.next(Upload);
    }


    this.Upload.subscribe((Upload) =>
    {
      if(Upload) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.Upload));
      else localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

    );
  }
}


