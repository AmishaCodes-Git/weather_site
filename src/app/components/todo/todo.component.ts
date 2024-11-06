import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  data:any = []

  constructor(private user: TodoService){}

  ngOnInit(){
    this.success();
  }

  success(){
    this.data = this.user.Data().subscribe((user)=>{
      console.log(user);
      this.data = user;
    })
  }

}
