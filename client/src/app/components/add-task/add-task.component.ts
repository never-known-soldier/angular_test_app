import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  due_date: string | undefined;
  created_by: string | undefined;
  project_date: number | undefined;
  client: string | undefined;
  project: string | undefined;
  task: string | undefined;
  status: string | undefined;
  assignee: string | undefined;
  send_mail: string | undefined;
  task_type: string | undefined;
  priority: string | undefined;
  note: string | undefined;
  email_notes: string | undefined;
  date_filter: string | undefined;
  submitted: boolean = false;
  constructor(private taskService: TaskService) {}

  saveTask(): void {
    if (this.validateForm()) {
      const data = {
        due_date: this.due_date,
        created_by: this.created_by,
        project_date: this.project_date,
        client: this.client,
        project: this.project,
        task: this.task,
        status: this.status,
        assignee: this.assignee,
        send_mail: this.send_mail,
        task_type: this.task_type,
        priority: this.priority,
        note: this.note,
        email_notes: this.email_notes,
        date_filter: this.date_filter,
      };
      this.taskService.create(data).subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          window.location.href = '/tasks';
        },
        error: (e) => console.error(e),
      });
    }
  }
  validateForm(): boolean {
    if (
      !this.due_date ||
      !this.created_by ||
      !this.project ||
      !this.task ||
      !this.status ||
      !this.assignee ||
      !this.client ||
      !this.email_notes ||
      !this.note ||
      !this.task_type
    ) {
      alert('Form validation failed: Required fields are not filled.');
      return false;
    }
    return true;
  }
  newTask(): void {
    this.due_date = undefined;
    this.created_by = undefined;
    this.project_date = undefined;
    this.client = undefined;
    this.project = undefined;
    this.task = undefined;
    this.status = undefined;
    this.assignee = undefined;
    this.send_mail = undefined;
    this.task_type = undefined;
    this.priority = undefined;
    this.note = undefined;
    this.email_notes = undefined;
    this.date_filter = undefined;

    // Reset the submitted status
    this.submitted = false;
  }
}
