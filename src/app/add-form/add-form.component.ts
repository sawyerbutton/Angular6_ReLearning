import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  // addTodoItem is a event emitter to emit data to the parent component by $event
  @Output() addTodoItem = new EventEmitter();
  // placeholder is using for property binding, from component to dom
  public placeholder = 'please input';
  constructor() { }
  public todoText = '';
  // using todoText2 for two way binding
  public todoText2 = '';
  ngOnInit() {
  }
  // when using typescript, we can declare that $event is mouse event to avoid mistake, and this is a one way binding form dom to component
  //
  public addTodo($event: MouseEvent) {
    console.log('Button has been clicked', this.todoText, this.todoText2);
    // emit param this.todoText2, it will become<app-add-form (addtodoitem)="addTodo($event)"></app-add-form> $event part
    this.addTodoItem.emit(this.todoText2);
  }
  // when input control hit the input event - input property, it will trigger the changeTodoText function with a event param
  // this is a cumbersome way to do the two way binding
  public changeTodoText($event: KeyboardEvent) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }
  public getBlueClass() {
    return 'blue';
  }
}
