import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }
  getClients(): void {
    this.clientService.getClients().subscribe((response) => {
      this.clients = response.data;
    });
  }

}
