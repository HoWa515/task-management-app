import { Component, EventEmitter, Output, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name?: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Give dog a haircut',
      summary: 'His fur is too long',
      dueDate: '2025-12-24',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn swimming',
      summary: 'Want to be strong',
      dueDate: '2027-12-24',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelTask() {
    this.isAddingTask = false;
  }
}
