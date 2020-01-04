import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, DefaultDataServiceConfig } from '@ngrx/data';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const defaultDataServiceConfig: DefaultDataServiceConfig = {

  root: 'http://localhost:9000/api',
};

@Injectable({providedIn: 'root'})
export class UsersDataService extends DefaultDataService<User> {

  constructor(httpClient: HttpClient, httpUrlGenerator: HttpUrlGenerator) {

    super('User', httpClient, httpUrlGenerator, defaultDataServiceConfig);
  }
}
