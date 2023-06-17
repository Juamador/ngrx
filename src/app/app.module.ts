import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule} from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { myReducer } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    
    StoreModule.forRoot({
      mensaje: myReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 4
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
