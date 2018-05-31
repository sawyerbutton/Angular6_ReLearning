import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  // placeholder is using for property binding, from component to dom
  public placeholder = 'please input';
  constructor() { }
  public todoText = '';
  // using todoText2 for two way binding
  public todoText2 = '';
  ngOnInit() {
  }
  // when using typescript, we can declare that $event is mouse event to avoid mistake, and this is a one way binding form dom to component
  public addTodo($event: MouseEvent) {
    console.log('Button has been clicked', this.todoText, this.todoText2);
  }
  // when input control hit the input event - input property, it will trigger the changeTodoText function with a event param
  // this is a cumbersome way to do the two way binding
  public changeTodoText($event: KeyboardEvent) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }
}
