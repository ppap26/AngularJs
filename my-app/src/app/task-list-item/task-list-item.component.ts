import { Component, computed, inject, input } from '@angular/core';
import { TaskItem } from '../models/task-item.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-list-item',
  imports: [],
  templateUrl: './task-list-item.component.html',
  styleUrl: './task-list-item.component.css',
})
export class TaskListItemComponent {
  taskItem = input.required<TaskItem>();
  statusValues = ['Todo', 'In Progress', 'Completed'];
  taskService = inject(TaskService);

  action = computed(() => {
    const taskItemValue = this.taskItem();
    return this.statusValues.filter((x) => taskItemValue.status !== x);
  });

  markAs(text: string, updateStatus: string) {
    this.taskService.markAsStatus(text, updateStatus);
  }
}
