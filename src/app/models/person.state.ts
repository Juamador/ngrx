import { Person } from './person.model';
export interface PersonState {
    loading: boolean,
    persons: ReadonlyArray<Person>;
}