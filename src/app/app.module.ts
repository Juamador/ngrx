import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { myReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { personReducer } from './state/reducers/persons.reducers';
import { ROOT_REDUCERS } from './app.state';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 4
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
