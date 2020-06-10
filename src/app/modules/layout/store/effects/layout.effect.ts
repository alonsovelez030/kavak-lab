import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { initStore, addCountryData } from '../actions/layout.action';
import { CountryService } from '../../services/layout.service';
import { CountryEntity } from '../../interfaces/layout.interface';


@Injectable()
export class LayoutEffect {

  constructor(
    private actions$: Actions,
    private countryService: CountryService) {}


  initStore$ =  createEffect(() => this.actions$.pipe(
      ofType(initStore),
      mergeMap(() => this.countryService.getAllCountryData().pipe(
        map( (countries: Array<any>) => {
          const newCountries = countries.map(
            value => {
              return {
                name: value?.name,
                region: value?.region,
                currencyCode: value?.currencies[0].code
              };
            }
          );
          return newCountries;
        }),
        map((data: Array<CountryEntity>) => {
          return addCountryData({countries: data});
        }),
        catchError(() => {
          return of([]);
        })
      ))
    ),
    {dispatch: false}
  );
}
