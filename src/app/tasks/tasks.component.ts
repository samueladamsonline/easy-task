import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;

  get selectedUserTasks() {
    return DUMMY_TASKS.filter(task => task.userId == this.userId);
  }
}
