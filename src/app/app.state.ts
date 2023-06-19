import { ActionReducerMap } from "@ngrx/store";
import { PersonState } from "./models/person.state";
import { personReducer } from './state/reducers/persons.reducers';

export interface AppSate {
    personsEntityState: PersonState
}

export const ROOT_REDUCERS: ActionReducerMap<AppSate> = {
    personsEntityState: personReducer
}