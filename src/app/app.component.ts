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
  dato$ : Observable<any>;
  loading$: Observable<boolean> = new Observable();
  constructor(private store: Store<any>,
              private personService: PersonService){
     this.dato$ = store.select('mensaje');
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadPersonList());
    this.personService.getUsersAPi().subscribe( (response: Person[])=> {
      this.store.dispatch(loadedPersonList({persons: response}));
    })  
  }


  SetSpanishMessage(){
this.store.dispatch({type: 'SPANISH'});
  }

  SetEnglishMessage(){
    this.store.dispatch({type: 'ENGLISH'});
  }
}
