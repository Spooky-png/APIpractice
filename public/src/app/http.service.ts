import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    //this.getPokemon();
    //this.abilityCheck();
  }
  getTasks(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getTasks method was invoked.
    return this._http.get('/tasks');
}
postToServer(tasks){
      // use the .post() method of HttpClient
      // num must be an object
      // provide the url of your post route - make sure this is set up in your server!
      return this._http.post('/tasks', tasks);  
  }
  
}