import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any = [];
  containers: any = [];
  details: any = [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTasksFromService();
  }
  getTasksFromService(){
    this._httpService.getTasks();
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
       console.log("Got our tasks!", data)
       this.tasks = data;
      });
  }
  onButtonClickParam(num: any) { 
    console.log(`Click event is working with num param: ${num[0].title}`);
    this.containers = num
    let observable = this._httpService.postToServer({data: num});
    observable.subscribe(data => console.log("Got our data!", data));
}
onButtonClickParams(detail: any) { 
  this.details = detail
  let observable = this._httpService.postToServer({data: detail});
  observable.subscribe(data => console.log("Got our data!", data));
}
}