import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../shared/todo-item';
import {TodoListService} from '../todo-list.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  // when using service, @Input decorator does not need anymore
  // @Input() items: TodoItem[];
  // also can use @Input('xxx') to adjust the value passed in
  constructor(
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
  }
  getTodoList() {
    return this.todoListService.getTodoList();
  }
  itemClick(item: TodoItem) {
    console.log(this.todoListService.getTodoList());
    return setTimeout(this.todoListService.toggleItemStatus(item), 0);
  }
  deleteItem(item: TodoItem) {
    return this.todoListService.deleteTodoItem(item);
  }
}
