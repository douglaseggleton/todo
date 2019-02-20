import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { TaskDueStatus } from './../task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'db ba bw0 bg-white mv2 blw2 pa3 pv2 tl mat-elevation-z2'
  }
})
export class CardComponent {

  @Input() public due: TaskDueStatus;

  @Input() public date: string;

  @Input() public title: string;

  @Input() public description: string;

  @HostBinding('class.due-now') get isDueNow() {
    return this.due ===  TaskDueStatus.NOW;
  }

  @HostBinding('class.due-soon') get isDueSoon() {
    return this.due === TaskDueStatus.SOON;
  }

  @HostBinding('class.due-later') get isDueLater() {
    return this.due === TaskDueStatus.LATER;
  }
}
