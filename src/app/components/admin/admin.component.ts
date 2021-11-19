import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admin[] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAdmins();
  }
  getAdmins() {
    this.adminService.getAdmins().subscribe((response) => {
      this.admins = response.data;
    });
  }
}
