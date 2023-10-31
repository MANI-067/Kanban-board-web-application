import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  getNotification() {
    return this.httpClient.get('http://localhost:6677/api/v1/notifications/' + localStorage.getItem('currentUser'));
  }
  readAllNotifications(){
    return this.httpClient.get('http://localhost:6677/api/v1/notifications/allRead/' + localStorage.getItem('currentUser'));
  }
  readNotifications(msg:any){
    return this.httpClient.get(`http://localhost:6677/api/v1/notifications/read/${localStorage.getItem('currentUser')}/${msg}`);
  }
}
