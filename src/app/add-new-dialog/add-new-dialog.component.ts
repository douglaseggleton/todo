import { Component, ChangeDetectionStrategy } from '@angular/core';
import { statuses, TaskStatus } from './../task';
import { FormBuilder, Validators } from '@angular/forms';

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

  public constructor(private fb: FormBuilder) {

  }

  public onSubmit() {
    console.log(this.addNewForm.value);
  }
}
