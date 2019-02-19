import { Component, Input, ChangeDetectionStrategy, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'db ba bw1 b--light-gray bg-white mv2 blw1 pa3 pv2 tl'
  }
})
export class CardComponent {

  @Input() public color: string;

  @Input() public date: string;

  @Input() public title: string;

  @Input() public description: string;

  @HostBinding('class.due-now') get isDueNow() {
    return this.color === 'red';
  }

  @HostBinding('class.due-soon') get isDueSoon() {
    return this.color === 'orange';
  }

  @HostBinding('class.due-later') get isDueLater() {
    return this.color === 'green';
  }
}
