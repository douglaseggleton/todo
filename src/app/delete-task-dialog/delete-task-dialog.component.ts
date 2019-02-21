import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteTask } from './../task/task.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteTaskDialogComponent {
  public constructor(
    private store: Store<any>,
    private dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public onConfirm() {
    this.store.dispatch(new DeleteTask(this.data));
    this.dialogRef.close();
  }
}
