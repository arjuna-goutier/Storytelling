import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlidesApiService } from './services/slides.api.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { slidesReducer } from './+state/slides.reducer';
import { slidesInitialState } from './+state/slides.init';
import { SlidesEffects } from './+state/slides.effects';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forFeature('slides', slidesReducer),
    EffectsModule.forFeature([ SlidesEffects ])
  ],
})
export class SlidesStateModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SlidesStateModule,
      providers: [ SlidesApiService ]
    };
  }
}
