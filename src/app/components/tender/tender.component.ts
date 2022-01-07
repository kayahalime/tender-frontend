import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup } from '@angular/forms';
import { TenderDetailService } from 'src/app/services/tender-detail.service';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  tenders: Tender[] = [];
  dataLoaded =false;
  imageBasePath ="https://localhost:37281";
  tenderEditForm!: FormGroup;
  tender : Tender;
  filterText="";
  image : Image;
  images:string[]=[];
  constructor(private tenderService: TenderService,private activatedRoute:ActivatedRoute,private authService:AuthService,private router: Router,private imageService:ImageService) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{

      if(params["categoryId"]){
        this.getTendersByCategory(params["categoryId"]);
        
      }
    }))
    this.getTenders();
  }
  getTenders() {
    this.tenderService.getTenderDetail().subscribe((response) => {
      this.tenders = response.data;
      for(let i=0;i<this.tenders.length;i++)
      { 
        this.getOneImage(this.tenders[i].tenderId);
      }
    });
  }
  getTendersByCategory(cayegoryId:number){
    this.tenderService.getTendersByCategory(cayegoryId).subscribe(response =>{
      this.tenders=response.data
      this.dataLoaded=true;
      for(let i=0;i<this.tenders.length;i++)
      { 
        this.getOneImage(this.tenders[i].tenderId);
      }
     
    })
  }
  getByFilterTenders(categoryId:number){
    console.log(categoryId);
    
    this.tenderService.getByFilterTenders(categoryId).subscribe(response=>{
      console.log(response);
      this.tenders=response.data
      for(let i=0;i<this.tenders.length;i++)
      { 
        this.getOneImage(this.tenders[i].tenderId);
      }
      
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
  getImage(tender:Tender){
   
    if(tender.imagePath){
      
      return tender.imagePath
    }
    else{
      return 'default.jpg'
    }
  }
  getOneImage(id:number):any{
    
    if( this.imageService. getImages(id).subscribe(response=>{
      
      this.images[id]=response.data[0].imagePath; 
      }) ){
        
      this.imageService. getImages(id).subscribe(response=>{
      
      this.images[id]=response.data[0].imagePath; 
      
      }) 
    }
    else{
      return 'default.jpg'
    }

  
  }

}
