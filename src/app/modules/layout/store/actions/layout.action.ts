import { createAction, props } from '@ngrx/store';

export enum LayoutAction {
    InitiStore = '[LAYOUT] Init store',
    ClearAll = '[LAYOUT] Clear all',
    AddCountryData = '[LAYOUT] Add country data'
}

export const clearAll = createAction(LayoutAction.ClearAll);
export const initStore = createAction(LayoutAction.InitiStore);
export const addCountryData = createAction(
    LayoutAction.AddCountryData,
    props<{countries: Array<{name: string; region: string; currencyCode: string }>}>()
);
