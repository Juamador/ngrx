import { createAction, props } from '@ngrx/store';
import { Person } from '../../models/person.model';

export const loadPersonList = createAction(
    '[Person List] load persons'
);

export const loadedPersonList = createAction(
    '[Person List] Loaded success',
    props<{persons: Person[] }>()
)