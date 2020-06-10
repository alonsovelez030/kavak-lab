import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Update } from '@ngrx/entity';


@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {}

  public getAllCountryData(): Observable<Array<any>> {
    return this.http.get<Array<any>>('https://restcountries.eu/rest/v2/all​');
  }
}
