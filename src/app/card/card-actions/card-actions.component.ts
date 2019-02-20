import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-actions',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardActionsComponent {
}
