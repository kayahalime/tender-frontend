import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup } from '@angular/forms';
import { TenderDetailService } from 'src/app/services/tender-detail.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  tenders: Tender[] = [];
  dataLoaded =false;
  tenderEditForm!: FormGroup;
  tender! : Tender;
  filterText="";
  constructor(private tenderService: TenderService,private activatedRoute:ActivatedRoute,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{

      if(params["categoryId"]){
        this.getTendersByCategory(params["categoryId"]);
      }
    }))
    this.getTenders();
  }
  getTenders() {
    this.tenderService.getTenders().subscribe((response) => {
      this.tenders = response.data;
    });
  }
  getTendersByCategory(cayegoryId:number){
    this.tenderService.getTendersByCategory(cayegoryId).subscribe(response =>{
      this.tenders=response.data
      this.dataLoaded=true;
     
    })
  }
  getByFilterTenders(categoryId:number){
    console.log(categoryId);
    
    this.tenderService.getByFilterTenders(categoryId).subscribe(response=>{
      console.log(response);
      this.tenders=response.data
      
    })
  }
  isAuthenticated(){
    return this.authService.isAuthenticated()
  }
  getTenderId(tenderId:number){
   
    this.tenderService.getById(tenderId).subscribe(response=>{
     this.tender=response.data
    })
  }
  deleteTender(tender:Tender) {
    console.log("delete")

    
    this.tenderService.delete(tender).subscribe((response) => {
      console.log("delete2")
      this.router.navigate(['', 'tenders']);
    });
  }

  
  }


