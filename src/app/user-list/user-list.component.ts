import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { Store } from '@ngrx/store';
import {AppSate} from '../app.state';

import { selectPersonList } from '../state/selectors/persons.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users$: Observable<any> = new Observable();
  constructor(private store: Store<AppSate>) { }

  ngOnInit(): void {
    this.Users$ = this.store.select(selectPersonList)
  }

}
