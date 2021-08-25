import { Subscription } from 'rxjs';
import { UiService } from './../ui.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task')
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);
  }
}
