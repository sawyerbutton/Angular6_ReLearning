import { Injectable } from '@angular/core';
import { TodoItem} from './shared/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }
  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: false
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];
  getTodoList() {
    return this.todoItems;
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
