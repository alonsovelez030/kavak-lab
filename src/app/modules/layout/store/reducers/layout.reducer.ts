import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { LayoutState } from '@modules/layout/interfaces/layout.interface';

import { addCountryData } from '../actions/layout.action';

const initialState: LayoutState = {
  countries: [],
  ui: {
    showModal: false,
    currentViewAuth: null
  }
};

const layoutReducerCreate = createReducer(
  initialState,
  on(addCountryData, (state, { countries }) => ({...state, countries: [...countries]})),
);

export function LayoutReducer(state: LayoutState, action: Action) {
  return layoutReducerCreate(state, action);
}

export const getLayout = createFeatureSelector<LayoutState>('layout');
