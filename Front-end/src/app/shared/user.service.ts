import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  noAuthHeader={headers:new HttpHeaders({'NoAuth':'True'})};

  selectedUser: User={
  fullName:'',
  email:'',
  password:''
}
  constructor(private http:HttpClient) { }

  //htp Methods
  login(usuario:string,password:string) {
    // let endPoint= `${environment.apiBaseUrl}:81/login/${usuario}/`+encodeURIComponent(password);
    let endPoint= `http://10.11.22.24:81/api/usuario/${usuario}/` + encodeURIComponent(password);
     return this.http.get(endPoint,{});
  }


 //Helper methods 
  setToken(token:string){
    localStorage.setItem('token',token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    var userPayload=this.getUserPayload();
    if (userPayload) {
        return userPayload.exp> Date.now()/1000;
    } else {
      return false;
    }
  }

  getUserPayload(){
    var token=this.getToken();
    if (token) {
        var userPayload=atob(token.split('.')[1]);
        return JSON.parse(userPayload);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }
}



