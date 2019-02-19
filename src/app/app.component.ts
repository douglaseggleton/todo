import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';
import { TaskStatus } from './task/task.enum';
import { statuses } from './task/task.constants';

enum TimeStatusColor {
  OVERDUE = 'red',
  SOON = 'orange',
  LATER = 'green'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = Date.now();

  public TaskStatus = TaskStatus;
  public statuses = statuses;

  public tasks = {
    [TaskStatus.TODO]: [{
      status: TaskStatus.TODO,
      title: 'Test Task 1',
      description: 'Description of task 1',
      due_date: Date.now(),
      color: TimeStatusColor.OVERDUE
    }],
    [TaskStatus.PENDING]: [{
      status: TaskStatus.PENDING,
      title: 'Test Task 2',
      description: 'Description of task 2',
      due_date: Date.now(),
      color: TimeStatusColor.SOON
    }],
  };

  public constructor(public dialog: MatDialog) {
  }

  public addTask() {
    this.dialog.open(AddNewDialogComponent, {
      maxWidth: '800px',
      maxHeight: '600px',
      width: '400px'
    });
  }
}
