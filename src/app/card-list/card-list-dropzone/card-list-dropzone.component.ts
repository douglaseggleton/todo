import { Component } from '@angular/core';

@Component({
  selector: 'app-card-list-dropzone',
  template: '<ng-content></ng-content>',
  host: {
    class: 'flex-grow-1 ph4 min-h3'
  }
})
export class CardListDropzoneComponent {}
