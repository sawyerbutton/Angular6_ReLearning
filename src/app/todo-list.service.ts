import { Injectable } from '@angular/core';
import { TodoItem} from './shared/todo-item';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    // Module for Http function
    private http: HttpClient
  ) {
    this.loadTodoList();
  }
  // static todoItems
  // todoItems: TodoItem[] = [{
  //   id: 1,
  //   value: 'Todo Item No.1',
  //   done: false
  // }, {
  //   id: 2,
  //   value: 'Todo Item No.2',
  //   done: false
  // }, {
  //   id: 3,
  //   value: 'Todo Item No.3',
  //   done: false
  // }];
  public todoItems: TodoItem[];
  getTodoList() {
    return this.todoItems;
  }
  loadTodoList() {
    this.http.get<TodoItem[]>('/assets/todo-list.json')
      .subscribe(res => this.todoItems = res);
    // .toPromise() this is convert observable to promise, need toPromise function from rxjs
    //       .then(response => {
    //         this.todoItems = response.json();
  }
  addTodoList(text) {
    this.todoItems.push(
      {
        id: new Date().getTime(),
        value: text,
        done: false
      }
    );
  }
  deleteTodoItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter((todoItem) => {
      return todoItem.id !== item.id;
    });
  }
  toggleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }
}
