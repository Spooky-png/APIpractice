import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
  }
  getTasks(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  newTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/new');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  deleteTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/delete/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  viewTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
  updateTask(){
    // our http response is an Observable, store it in a variable
    let tempObservable = this._http.get('/:id');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }
}