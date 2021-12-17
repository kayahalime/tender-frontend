import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bid } from 'src/app/models/bid';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  bids: Bid[] = [];
  bidAddForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private bidService: BidService, private router:Router) { }

  ngOnInit(): void {
    this.getBids();
    this.createBidAddForm();
  }
  getBids() {
    this.bidService.getBids().subscribe((response) => {
      this.bids = response.data;
    });
  }
  createBidAddForm(){
    this.bidAddForm = this.formBuilder.group({
      tenderId:["",Validators.required],  
      clientId: ["",Validators.required],
      price: ["",Validators.required],
      
     
     
    })


  }
  add(){
    console.log("add")
      let corparation = Object.assign({},this.bidAddForm.value)
      this.bidService.add(corparation).subscribe(data=>{
        console.log("ihale Eklendi","Başarılı")
        this.router.navigate(["tenders"])
      })
      console.log(corparation)
      
    
    
    
  }


}
