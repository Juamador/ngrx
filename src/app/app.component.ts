import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from './app.reducer';
import { loadPersonList, loadedPersonList } from './state/actions/persons.actions';
import { selectLoading } from './state/selectors/persons.selectors';
import { PersonService } from './services/person.service';
import { Person } from './models/person.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myApp';
  loading$: Observable<boolean> = new Observable();
  constructor(private store: Store<any>){

  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPersonList());
  }


  SetSpanishMessage(){
this.store.dispatch({type: 'SPANISH'});
  }

  SetEnglishMessage(){
    this.store.dispatch({type: 'ENGLISH'});
  }
}
