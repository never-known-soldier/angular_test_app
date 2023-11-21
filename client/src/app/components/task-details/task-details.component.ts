import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTask: any = {
    due_date: '2023-12-01',
    created_by: 'John Doe',
    project_date: 0,
    client: 'Client XYZ',
    project: 'Project ABC',
    task: 'Task 123',
    status: 'In Progress',
    assignee: 'Jane Doe',
    send_mail: '0',
    task_type: 'Development',
    priority: 'High',
    note: 'This is a test note',
    email_notes: 'Email notes go here',
  };

  message = '';

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTask(this.route.snapshot.params['id']);
    }
  }

  getTask(id: string): void {
    this.taskService.get(id).subscribe({
      next: (data) => {
        this.currentTask = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      due_date: this.currentTask.due_date,
      created_by: this.currentTask.created_by,
      project_date: this.currentTask.project_date,
      client: this.currentTask.client,
      project: this.currentTask.project,
      task: this.currentTask.task,
      status: this.currentTask.status,
      assignee: this.currentTask.assignee,
      send_mail: this.currentTask.send_mail,
      task_type: this.currentTask.task_type,
      priority: this.currentTask.priority,
      note: this.currentTask.note,
      email_notes: this.currentTask.email_notes,
    };

    this.message = '';

    this.taskService.update(this.currentTask.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateTask(): void {
    this.message = '';

    this.taskService
      .update(this.currentTask.id, this.currentTask)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This task was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }

  deleteTask(): void {
    this.taskService.delete(this.currentTask.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/tasks']);
      },
      error: (e) => console.error(e),
    });
  }
}
