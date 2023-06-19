import { createSelector } from '@ngrx/store';
import { AppSate } from 'src/app/app.state';
import { PersonState } from 'src/app/models/person.state';

export const selectPersonsFeature = (state: AppSate) => state.personsEntityState;

export const selectPersonList = createSelector(
    selectPersonsFeature,
    (state: PersonState) => state.persons
);

export const selectLoading = createSelector (
    selectPersonsFeature,
    (state: PersonState) => state.loading
);