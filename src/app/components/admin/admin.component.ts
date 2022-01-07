import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admin[] = [];
  adminAddForm: FormGroup;
  constructor(private adminService: AdminService,private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getAdmins();
    this.createAdminAddForm();
  }
  getAdmins() {
    this.adminService.getAdmins().subscribe((response) => {
      this.admins = response.data;
    }); 
  }
  createAdminAddForm(){
    this.adminAddForm = this.formBuilder.group({
      userId: ["",Validators.required],
     
    })


  }
  add(){
    console.log("add")
      let corparation = Object.assign({},this.adminAddForm.value)
      this.adminService.add(corparation).subscribe(data=>{
        console.log(" Eklendi","Başarılı")
        this.router.navigate(["admin/list"])
      })
      console.log(corparation)
      
    
    
    
  }
}
