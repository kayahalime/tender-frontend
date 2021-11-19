import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  tenders: Tender[] = [];
  dataLoaded =false;
  filterText="";
  constructor(private tenderService: TenderService,private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    if(this.activatedRoute.params.subscribe(params=>{

      if(params["categoryId"]){
        this.getTendersByCategory(params["colorId"]);
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

}
