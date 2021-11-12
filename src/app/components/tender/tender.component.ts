import { Component, OnInit } from '@angular/core';
import { Tender } from 'src/app/models/tender';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {

  tenders: Tender[] = [];
  constructor(private tenderService: TenderService) { }

  ngOnInit(): void {
    this.getTenders();
  }
  getTenders() {
    this.tenderService.getTenders().subscribe((response) => {
      this.tenders = response.data;
    });
  }

}
