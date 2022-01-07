import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tender } from 'src/app/models/tender';
import { TenderDetails } from 'src/app/models/tenderDetails';
import { ImageService } from 'src/app/services/image.service';
import { TenderDetailService } from 'src/app/services/tender-detail.service';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-tender-detail',
  templateUrl: './tender-detail.component.html',
  styleUrls: ['./tender-detail.component.css']
})
export class TenderDetailComponent implements OnInit {

  tenderDetails: TenderDetails[];
  tenderDetail! : TenderDetails;
  images: Image[];
  ImageBasePath:string = "https://localhost:37281";
  image : Image;

  constructor(private tenderDetailService: TenderDetailService,
    private router: Router,private activatedRoute: ActivatedRoute, private imageService: ImageService) { }


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((params) => {
      console.log("ilk");
      if (params['id']) {
       
        console.log("iki");
         this.getTenderId(params['id']);
         this.getTenderImageByTenderId(params["id"]);
        
      }
     
    });
  }
  getTenderDetail(tenderId: number) {
    this.tenderDetailService.getTenderDetail(tenderId).subscribe((response) => {
      this.tenderDetails = response.data;
    });
  }
  getTenderId(tenderId:number){
    
    this.tenderDetailService.getById(tenderId).subscribe(response=>{
      
     this.tenderDetail=response.data
     console.log(this.tenderDetail.job);
    })
  }
  getTenderImageByTenderId(tenderId:number){
    console.log("1. adım");
    this.imageService.getImages(tenderId)
      .subscribe((response) => {
        
        this.images = response.data;
        console.log(this.image.imagePath);
      });
  }
  getCurrentImageClass(image:Image){
    if(image == this.images[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }

}
