import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.css']
})
export class ViewNotificationComponent implements OnInit {
  noti:any

  constructor(private router:Router, private service:UserService) { }
  
  ngOnInit(): void {
    let id = (sessionStorage.getItem('id'))
    this.getNotification(id)
  
  }
  getNotification(id)
  {
    let response = this.service.getNoti(id);
    response.subscribe(data => this.setView(data))
  }
  setView(noti) {
    this.noti=noti
 

}
}
