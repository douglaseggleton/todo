import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';
import {
  DragDropModule
} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

const SHARED_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  DragDropModule
];

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule { }
