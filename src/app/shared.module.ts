import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

const SHARED_MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES],
})
export class SharedModule { }