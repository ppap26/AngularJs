import { Component, inject, computed } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  imports: [TaskFormComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  taskService = inject(TaskService);

  private tasks = this.taskService.tasks;

  todoItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Todo');
  });

  inProgressItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'In Progress');
  });

  completedItems = computed(() => {
    const tasks = this.tasks();
    return tasks.filter((x) => x.status === 'Completed');
  });
}
