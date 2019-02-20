import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statuses, TaskStatus } from './../task';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTask } from './../task/task.actions';


@Component({
  selector: 'app-add-new-dialog',
  templateUrl: './add-new-dialog.component.html',
  styleUrls: ['./add-new-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewDialogComponent {

  public statuses = statuses;

  public addNewForm = this.fb.group({
    title: ['',
      Validators.required
    ],
    description: [''],
    date: [(new Date()),
      Validators.required
    ],
    status: [
      TaskStatus.TODO,
      Validators.required
    ]
  })

  public constructor(private fb: FormBuilder, private store: Store<any>) {
  }

  public onSubmit() {
    this.store.dispatch(new AddTask(this.addNewForm.value));
  }
}
