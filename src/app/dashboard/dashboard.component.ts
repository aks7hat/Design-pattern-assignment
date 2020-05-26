import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscribe } from '../subscribe';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subscribe:Subscribe = new Subscribe();
  registerForm: FormGroup;
  submitted = false;
  id:any
  constructor(public service: UserService, private router: Router,
    private formBuilder : FormBuilder) { }

    ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        celebration: ['', Validators.required],
        urgentHelp: ['', Validators.required],
        news: ['', Validators.required],
        newPolicy: ['', Validators.required],
        holiday: ['', Validators.required],
        
      });
    }

  get check() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.subscribeNow();
    if (this.registerForm.invalid) {
      return;
    }
    }
    
    public subscribeNow()
    {
      this. id = (sessionStorage.getItem('id'))
      console.log(this.id)
    let response = this.service.subscribe(this.subscribe,this.id);
    response.subscribe();
    this.router.navigate(['/user-dashboard'])
    }
}