import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { LocaleStorageService } from 'src/app/services/locale-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentUser:User

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    
    private localStorageService:LocaleStorageService,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
  
    this.getCurrentUser;
  }

 
  

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  getCurrentUser(){
    return this.localStorageService.get('user')
  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
