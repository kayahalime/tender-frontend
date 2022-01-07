import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  constructor(
    private formBuilder:FormBuilder,
  
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(){
    console.log("deneme1")
    this.registerForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      code:['',Validators.required]
    })
    console.log("deneme2")
  }

  register(){
    
      console.log("register")
      let registerModel = this.registerForm.value;
      
        this.authService.register(registerModel).subscribe(response=>{
          this.router.navigate(["login"])
        }, responseError => {
          console.log(responseError)
        })
        
    
    
  }
 

}
