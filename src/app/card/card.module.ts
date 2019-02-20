import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardActionsComponent } from './card-actions/card-actions.component';
import { SharedModule } from './../shared.module';

const COMPONENTS = [
  CardComponent,
  CardActionsComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CardModule { }
