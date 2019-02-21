import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListDropzoneComponent } from './card-list-dropzone/card-list-dropzone.component';
import { CardListTitleComponent } from './card-list-title/card-list-title.component';
import { CardListComponent } from './card-list.component';

import { SharedModule } from './../shared.module';

const COMPONENTS = [
  CardListDropzoneComponent,
  CardListTitleComponent,
  CardListComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CardListModule { }
