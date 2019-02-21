import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { statuses, TaskStatus } from './../task';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTask, DeleteTask } from './../task/task.actions';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../task/task.interface';

@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewDialogComponent {

  public statuses = statuses;

  public addNewForm = this.fb.group({
    title: [this.data ? this.data.title : '',
      Validators.required
    ],
    description: [this.data ? this.data.description : ''],
    date: [this.data ? this.data.date : new Date(),
      Validators.required
    ],
    status: [
      this.data ? this.data.status : TaskStatus.TODO,
      Validators.required
    ]
  });

  public constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private dialogRef: MatDialogRef<AddNewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
  }

  public onSubmit() {
    // Immutable Tasks, Get Rid of the Old One
    if (this.data) {
      this.store.dispatch(new DeleteTask(this.data));
    }

    // Create a new one Regardless
    this.store.dispatch(new AddTask(this.addNewForm.value));
    this.dialogRef.close();
  }
}
