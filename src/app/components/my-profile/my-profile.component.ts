import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from 'src/app/models/Register';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private activatedRouted: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  userUpdateForm: FormGroup;
  currentUser:Register;
  userId:number;

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if(params["userId"])
      {
        this.getUserById(params["userId"])
        this.createUserUpdateForm();
      }
    })
  }

  createUserUpdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password:["", Validators.required],
    });
  }

  getUserById(userId: number) {
    this.userService.getById(userId).subscribe((response) => {
      if (response.success) {   
        this.currentUser = response.data;
        this.userUpdateForm.get('firstName')?.setValue(this.currentUser.firstName); 
        this.userUpdateForm.get('lastName')?.setValue(this.currentUser.lastName);
        this.userUpdateForm.get('email')?.setValue(this.currentUser.email);
      }
    });
  }

  update() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      this.userService.update(userModel,this.currentUser.id).subscribe(
        (response) => {
        
          this.router.navigate(['/tenders']);
        },
        
      );
    } 
  }
}
