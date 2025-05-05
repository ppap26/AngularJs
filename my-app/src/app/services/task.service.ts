import { Injectable, signal } from '@angular/core';
import { TaskItem } from '../models/task-item.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<TaskItem[]>([]);

  addTask(task: string, status: string) {
    this.tasks.update((previousState) => {
      return [...previousState, { task, status }];
    });
  }

  markAsStatus(text: string, updateStatus: string) {
    this.tasks.update((existingCollection) => {
      const findTask = existingCollection.find((x) => x.task === text);

      if (findTask) {
        return [
          ...existingCollection.filter((x) => x.task !== text),
          { task: text, status: updateStatus },
        ];
      } else {
        return existingCollection;
      }
    });
  }
}
