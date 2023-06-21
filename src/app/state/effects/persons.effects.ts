import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY} from 'rxjs';
import {map, mergeMap, catchError} from 'rxjs/operators';
import { PersonService } from 'src/app/services/person.service';

@Injectable()
export class PersonEffects {

    loadPersons$ = createEffect(()=> this.actions$.pipe(
        ofType('[Person List] load persons'),
        mergeMap(()=> this.personService.getUsersAPi()
        .pipe(
            map(persons => ({type: '[Person List] Loaded success', persons})),
            catchError(()=> EMPTY)
        ))
        )
    );

    constructor(private actions$: Actions,
                private personService: PersonService){}
}