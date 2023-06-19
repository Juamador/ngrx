import { createReducer, on} from '@ngrx/store';
import { Person } from 'src/app/models/person.model';
import { loadPersonList, loadedPersonList } from '../actions/persons.actions';
import { PersonState } from '../../models/person.state';


export const initialState: PersonState = {loading: false, persons: []}

export const personReducer = createReducer(
    initialState,
    on(loadPersonList, (state) => {
        return {...state, loading: true};
    }),
    on(loadedPersonList, (state, {persons}) => {
        return {...createReducer, loading: false, persons}
    })
);
