import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/store';
import { initStore } from '../store/actions/layout.action';

@Injectable()
export class LayoutModel {

  constructor(private store: Store<AppState>) {}

  public initStore(): void {
    this.store.dispatch(initStore());
  }
}
