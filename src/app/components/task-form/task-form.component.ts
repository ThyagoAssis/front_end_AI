import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task: string = '';

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    if (this.task.trim()) {
      this.taskService.addTask(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
