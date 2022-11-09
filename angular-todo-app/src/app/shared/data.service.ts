import { NumberFormatStyle } from '@angular/common';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    //new Todo('this is a test!', true),
    //new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quis totam nihil ratione quidem autem hic aliquid, voluptatem tenetur placeat nulla? Eaque vero, sed corporis excepturi reprehenderit quasi ex facilis!')
  ] 

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo:Todo){
    this.todos.push(todo)
  }

  updateTodo(index:number,updatedTodo:Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index:number){
     this.todos.splice (index,1)
  }
}
