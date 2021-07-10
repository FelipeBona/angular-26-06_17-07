import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(){
    let url = 'https://jsonplaceholder.typicode.com/todos';
   
    return this.http.get(url);
  }

  save(id:number){
     var user = {
        userId: 1,
        id: 100,
        title: "Vilson",
        completed: false
      }
      let url = `https://jsonplaceholder.typicode.com/todos/${id}`;
   
      return this.http.post(url, user);
  }

  getOne(id:any){
    let url = 'https://jsonplaceholder.typicode.com/todos/'+id;
   
    return this.http.get(url);
  }
 
    
}
