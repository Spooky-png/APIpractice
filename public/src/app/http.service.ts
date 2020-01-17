import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getTasks() {
    return this._http.get('/tasks')
  }
  getTaskById(id) {
    return this._http.get(`/tasks/${id}`);

  }

  createTask(task) {
    console.log("in service ", task)
    return this._http.post('/new/', task)
  }

  deleteTask(id) {
    return this._http.delete(`/remove/${id}`)
  }

  updateTask(task) {
    return this._http.put(`/tasks/${task._id}`, task)
  }
}