import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';

import { CardModule } from './card/card.module';
import { CardListComponent } from './card-list/card-list.component';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    AddNewDialogComponent
  ],
  entryComponents: [
    AddNewDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CardModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
