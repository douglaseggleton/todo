import { Component } from '@angular/core';

enum TaskStatus {
  TODO,
  PENDING,
  COMPLETE
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = Date.now();

  public TaskStatus = TaskStatus;

  public statuses = [
    {
      title: 'Todo',
      type: TaskStatus.TODO
    },
    {
      title: 'In Progress',
      type: TaskStatus.PENDING
    },
    {
      title: 'Complete',
      type: TaskStatus.COMPLETE
    }
  ];

  public tasks = {
    [TaskStatus.TODO]: [{
      status: TaskStatus.TODO,
      title: 'Test Task 1',
      description: 'Description of task 1',
      due_date: Date.now()
    }],
    [TaskStatus.PENDING]: [{
      status: TaskStatus.PENDING,
      title: 'Test Task 2',
      description: 'Description of task 2',
      due_date: Date.now()
    }],
  }
}
