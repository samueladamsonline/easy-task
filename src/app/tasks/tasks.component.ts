import { Component, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

interface User {
  id: string,
  name: string,
  avatar: string
};

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() user?: User;

  get tasks() {
    return DUMMY_TASKS.filter(task => task.userName === this.user?.name)
  }
}
