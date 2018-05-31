import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from '../shared/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() items: TodoItem[];
  // also can use @Input('xxx') to adjust the value passed in
  constructor() { }

  ngOnInit() {
  }

}
