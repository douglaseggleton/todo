import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statuses } from './../task/task.constants';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: ''
  }
})
export class AddNewDialogComponent {

  public statuses = statuses;

}
