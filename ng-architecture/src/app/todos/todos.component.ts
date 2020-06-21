import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'Todos';
  // todos = ['Array Todo 1', 'Array Todo 2' , 'Array Todo 3'];
  todos: any;

  constructor(
    private todosService: TodosService) {
      this.todosService.getTodos().subscribe( data => {
        console.log('TodosComponent -> data', data);
        this.todos = data;
      });
    }

  ngOnInit(): void {
  }

}
