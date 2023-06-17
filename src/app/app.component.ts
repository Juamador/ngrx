import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from './app.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  dato$ : Observable<any>;

  constructor(private store: Store<appState>){
     this.dato$ = store.select('mensaje');
  }

  SetSpanishMessage(){
this.store.dispatch({type: 'SPANISH'});
  }

  SetEnglishMessage(){
    this.store.dispatch({type: 'ENGLISH'});
  }
}
