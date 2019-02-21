import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { TaskDueStatus } from './../task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'db bw0 bg-white tl mat-elevation-z2 mb2'
  }
})
export class CardComponent {

  @Input() public due: TaskDueStatus;

  @Input() public date: string;

  @Input() public title: string;

  @Input() public description: string;

  @HostBinding('class.card-red') get isRed() {
    return this.due ===  TaskDueStatus.OVERDUE;
  }

  @HostBinding('class.card-orange') get isOrange() {
    return this.due === TaskDueStatus.LESS_THAN_WEEK;
  }

  @HostBinding('class.card-green') get isGreen() {
    return this.due === TaskDueStatus.MORE_THAN_WEEK;
  }

  @HostBinding('class.card-gray') get isGray() {
    return this.due === TaskDueStatus.NEVER;
  }
}
