import { StoreModule } from '@ngrx/store';
import AppStore from './store-reducer.util';
import { ModuleWithProviders } from '@angular/core';

export class StoreUtil {
  public static globalStore(): Array<ModuleWithProviders> {
    return [StoreModule.forRoot(AppStore)];
  }
}
