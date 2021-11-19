import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/models/bid';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {

  bids: Bid[] = [];
  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.getBids();
  }
  getBids() {
    this.bidService.getBids().subscribe((response) => {
      this.bids = response.data;
    });
  }

}
