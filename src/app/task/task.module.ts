import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './task.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('task', reducer)
  ],
  exports: [
  ]
})
export class TaskModule {}
