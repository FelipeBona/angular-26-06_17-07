import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }
  
  getData(){
    let url = ' http://localhost:3000/users';
    return this.http.get(url);
  }

  save(data:any){
    let url = ' http://localhost:3000/users';
   return this.http.post(url,data);
  }

}
