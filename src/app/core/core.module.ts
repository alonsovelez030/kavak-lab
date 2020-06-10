import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '@environments/environment';

import { StoreUtil } from './store/utils/store.util';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreUtil.globalStore(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: []
})
export class CoreModule { }
