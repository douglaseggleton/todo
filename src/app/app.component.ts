import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddNewDialogComponent } from './add-new-dialog/add-new-dialog.component';
import { DeleteTaskDialogComponent } from './delete-task-dialog/delete-task-dialog.component';
import { Store, select } from '@ngrx/store';
import { selectAllTasksByStatus } from './task/task.selectors';
import { Observable } from 'rxjs';
import { Task } from './task/task.interface';
import { UpdateTask } from './task/task.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = Date.now();

  public tasksByStatus$: Observable<any>;

  public constructor(public dialog: MatDialog, private store: Store<any>) {
    this.tasksByStatus$ = this.store.pipe(select(selectAllTasksByStatus));
  }

  public addTask() {
    this.dialog.open(AddNewDialogComponent, {
      maxWidth: '800px',
      maxHeight: '600px',
      width: '400px'
    });
  }

  public editTask(task: Task) {
    this.dialog.open(AddNewDialogComponent, {
      maxWidth: '800px',
      maxHeight: '600px',
      width: '400px',
      data: {
        ...task
      }
    });
  }

  public removeTask(task: Task) {
    this.dialog.open(DeleteTaskDialogComponent, {
      data: {
        ...task
      }
    });
  }

  public dropTask(event: any) {
    this.store.dispatch(new UpdateTask({
      id: event.item.data.id,
      changes: {
        status: event.container.data.type
      }
    }));
  }
}
