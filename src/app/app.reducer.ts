import { Action } from '@ngrx/store';

export interface appState {
    mensaje: string
}

export const initialState = {
    mensaje: 'Ing Julisy Amador'
}

export function myReducer(state: appState = initialState, action: Action ){
   console.log(action);

   switch(action.type) {
    case 'SPANISH':
            return {
                ...state,
                mensaje:'Hola Mundo!'
            }    
    case 'ENGLISH':
          return {
                ...state,
                mensaje:'Hello world!!!'
           }
    default:
        return state;
   }

}