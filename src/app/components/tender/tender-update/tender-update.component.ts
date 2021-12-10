import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender-update',
  templateUrl: './tender-update.component.html',
  styleUrls: ['./tender-update.component.css']
})
export class TenderUpdateComponent implements OnInit {

  tenderUpdateForm:FormGroup;
  tenderId:number;
  tender:Tender;
  constructor( private tenderService:TenderService,
    private formBuilder:FormBuilder,
   
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["tenderId"]){
        this.tenderId=params["tenderId"];
        this.getTender(params["tenderId"]);
      
      }
    })

    this.createTenderUpdateForm();
   
  }

  createTenderUpdateForm(){
    this.tenderUpdateForm=this.formBuilder.group({
     
      categoryId:["",Validators.required],
      adminId: ["", Validators.required],
      clientId: ["",Validators.required],
      price: ["",Validators.required],
      active: ["",Validators.required],
      startingDate: ["",Validators.required],
      endDate: ["",Validators.required],
      job: ["",Validators.required],
      corparation: ["",Validators.required],
      
    });
  }

  update(){
  
    if(this.tenderUpdateForm.valid){
     

      let tenderModel=Object.assign({},this.tenderUpdateForm.value)
      this.tenderService.update(tenderModel).subscribe(data=>{
       
      console.log("Güncelleme Tamamlandı","Başarılı")
      },dataError=>{
        console.log("Güncelleme İşlemi Başarısız","Hata")
      })
  
    }
    else{
       console.log("Formunuz eksik","Dikkat");
    }
  }

  getTender(tenderId:number){
   
    this.tenderService.getById(tenderId).subscribe(response=>{
     this.tender=response.data
    })
  }

}
