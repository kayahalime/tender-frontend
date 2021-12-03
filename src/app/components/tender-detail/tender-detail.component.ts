import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TenderDetails } from 'src/app/models/tenderDetails';
import { TenderDetailService } from 'src/app/services/tender-detail.service';

@Component({
  selector: 'app-tender-detail',
  templateUrl: './tender-detail.component.html',
  styleUrls: ['./tender-detail.component.css']
})
export class TenderDetailComponent implements OnInit {

  tenderDetails: TenderDetails[];

  constructor(private tenderDetailService: TenderDetailService,
    private router: Router,private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['tenderId']) {
         this.getTenderDetail(params['tenderId']);
        
      }
     
    });
  }
  getTenderDetail(tenderId: number) {
    this.tenderDetailService.getTenderDetail(tenderId).subscribe((response) => {
      this.tenderDetails = response.data;
    });
  }

}
