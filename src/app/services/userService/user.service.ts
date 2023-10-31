import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  currentUser:any;

  setUser(name:any){
   localStorage.setItem("name", name);
   this.currentUser=localStorage.getItem("name") 
  }
  getUser(){
    if(localStorage.getItem("name")){
      return localStorage.getItem("name");
    }
    return this.currentUser;
  }

  resetUser(){
    localStorage.removeItem("name")
    this.currentUser=undefined;
  }




  baseUrl="http://localhost:6677/api/v1/auth"

  baseUrl2="http://localhost:6677/api/v1/user/"

  loginUser(loginData:any){
    return this.httpClient.post(this.baseUrl+"/login",loginData);
  }

  regsiterCustomer(userData:any){
    return this.httpClient.post(this.baseUrl2+'register',userData);
   
  }

  findUserCustomer(name:string){
    return this.httpClient.get(this.baseUrl+"/findUser/"+`${name}`);
  }

  getProjectList(){
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("jwt")}` })
  
    return this.httpClient.get(this.baseUrl2+"getUserDetails", {headers})
  }
  
  deleteProject(projectName:string){
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem("jwt")}` })

    return this.httpClient.get(this.baseUrl2+ `removeProject/${projectName}`, {headers})
  }

  getAllUsers(){
    return this.httpClient.get(this.baseUrl+ '/allUser');
  }

  removeProjectOfMember(projectName:any, name:any){
    return this.httpClient.get(this.baseUrl2+`removeProjectFromMember/${projectName}/${name}`)
  }

}
