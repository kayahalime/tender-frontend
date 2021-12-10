import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender-add',
  templateUrl: './tender-add.component.html',
  styleUrls: ['./tender-add.component.css']
})
export class TenderAddComponent implements OnInit {

  tenderAddForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private tenderService:TenderService, private router:Router) { }

  ngOnInit(): void {
    this.createTenderAddForm();
  }
  createTenderAddForm(){
    this.tenderAddForm = this.formBuilder.group({
      categoryId:["",Validators.required],
      adminId: ["", Validators.required],
      clientId: ["",Validators.required],
      price: ["",Validators.required],
      active: ["",Validators.required],
      startingDate: ["",Validators.required],
      endDate: ["",Validators.required],
      job: ["",Validators.required],
      corparation: ["",Validators.required],
     
     
    })


  }
  add(){
    
      let corparation = Object.assign({},this.tenderAddForm.value)
      this.tenderService.add(corparation).subscribe(data=>{
        console.log("Araç Eklendi","Başarılı")
        this.router.navigate(["tenders"])
      })
      console.log(corparation)
      
    
    
    
  }


}
