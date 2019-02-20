import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskStatus } from './../task/task-status.enum';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  host: {
    class: 'db flex-grow-1 flex-basis-third tc pb3 flex flex-column'
  }
})
export class CardListComponent {}
