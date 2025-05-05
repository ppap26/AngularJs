import { Component, input } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  heading = input.required<string>();
  tasks = input.required<TaskItem[]>();
}
