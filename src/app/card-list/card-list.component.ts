import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  host: {
    class: 'db flex-grow-1 flex-basis-third tc pb3'
  }
})
export class CardListComponent {

  @Input() public title: string;

}
