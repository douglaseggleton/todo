import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';

import { CardModule } from './card/card.module';
import { CardListComponent } from './card-list/card-list.component';
import { CardListDropzoneComponent } from './card-list/card-list-dropzone/card-list-dropzone.component';
import { CardListTitleComponent } from './card-list/card-list-title/card-list-title.component';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, MetaReducer, ActionReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import { TaskModule } from './task/task.module';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['task'],
    rehydrate: true
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    AddNewDialogComponent,
    DeleteTaskDialogComponent,
    CardListDropzoneComponent,
    CardListTitleComponent
  ],
  entryComponents: [
    AddNewDialogComponent,
    DeleteTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CardModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
