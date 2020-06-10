import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffect } from './store/effects/layout.effect';
import { LayoutModel } from './models/layout.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from './services/layout.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    EffectsModule.forFeature([LayoutEffect]),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LayoutModel,
    CountryService
  ]
})
export class LayoutModule { }
