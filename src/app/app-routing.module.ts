import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidComponent } from './components/bid/bid.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { TenderDetailComponent } from './components/tender-detail/tender-detail.component';
import { TenderComponent } from './components/tender/tender.component';

const routes: Routes = [
  
  {path:"",pathMatch:"full",component:TenderComponent,},
  {path:"tenders",component:TenderComponent},
  {path:"tenders/category/:categoryId",component:TenderComponent},
  {path:"category",component:CategoryComponent},
  {path:"bids",component:BidComponent},
  {path:"tenders/tenderdetail/:tenderId",component:TenderDetailComponent},
  {path:"login",component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
