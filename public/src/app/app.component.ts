import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  task: string
  tasks;
  newTask;
  editTask;
  errors = []; //erors when creating a task
  editerrors = []; //errors when editing a task
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newTask = { title: "", description: "" }
    this.getTasksFromService();
    this.editTask = null;
    // this.getSingleTask("5acf9d5c37c38756141c0552")
  }
  createTask() {
    console.log("in component, task: ", this.newTask)
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      if (data['errors']){
        this.errors = data['errors']
      }else{
        this.errors = [];
        this.newTask = { title: "", description: "" }
        this.getTasksFromService()
      }
    })

  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data;
    });
  }
  getSingleTask(id) {
    let observable = this._httpService.getTaskById(id);
    observable.subscribe(data => {
      console.log("Got our single task!", data['title'])
      this.task = data['title']
    })
  }
  deleteTask(id) {
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log("successfully deleted task")
      this.getTasksFromService()
    })
  }
  taskForm(task) {
    this.editTask = JSON.parse(JSON.stringify(task));
  }
  updateTask() {
    let observable = this._httpService.updateTask(this.editTask);
    observable.subscribe(data => {
      if (data['errors']){
        this.editerrors = data['errors']
      }else{
        this.editerrors = [];
        this.editTask = null;
        this.getTasksFromService();
        console.log("successfully updated task!")
      }
    })
  }
}