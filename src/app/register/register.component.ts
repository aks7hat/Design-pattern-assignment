import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  register: Register = new Register();

 


  constructor( private router: Router, private formBuilder: FormBuilder , private service:UserService) { }

  ngOnDestroy(): void {
    this.service.register = this.register
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    
      password: ['', Validators.required],
     
    });

  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.registerNow();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
  }

    public registerNow() {
        let response = this.service.doRegistration(this.register);
        response.subscribe();
        this.router.navigate(['/'])
    
    
      }  
    }
  

