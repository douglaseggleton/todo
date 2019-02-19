import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'db ba bw1 b--light-gray bg-white mv2 blw2 pa3 pv2 tl'
  }
})
export class CardComponent {

  @Input() public color: string;

  @Input() public date: string;

  @Input() public title: string;

  @Input() public description: string;

}
