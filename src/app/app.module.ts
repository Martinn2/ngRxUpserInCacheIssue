import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {StoreModule} from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { EntityMetadataMap, EntityDataModule, DefaultDataServiceConfig, EntityDefinitionService, EntityDataService } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { UsersDataService } from './user.data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserModule,
    NoopAnimationsModule,
    StoreModule.forRoot({},
      {
      runtimeChecks : {
        strictStateImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    EntityDataModule.forRoot(entityConfig),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(entityDefinitionService: EntityDefinitionService, private entityDataService: EntityDataService,
    usersDataService: UsersDataService) {
    entityDataService.registerService('User', usersDataService);
  }
 }
