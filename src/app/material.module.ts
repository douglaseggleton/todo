import { MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

const MODULES = [
  MatToolbarModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule { }