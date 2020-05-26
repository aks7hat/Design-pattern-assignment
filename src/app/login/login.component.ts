import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service:UserService) { }

  ngOnInit(): void {
  }
  login(form : NgForm) {

    let email = form.value.email
    let password = form.value.password
     
     let credential = {
       "email": email,
       "password": password
     }
     console.log(credential)
     let response = this.service.doLogin(credential);
    console.log(response)
     response.subscribe(data => this.redirectPage(data))
     
    

    }
  
    redirectPage(data) {
      let id = data
      sessionStorage.setItem('id',id)
      console.log(id)

    
      this.router.navigate(['/user-dashboard'])
    
  
    }
  

}
