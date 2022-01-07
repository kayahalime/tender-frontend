import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { BidComponent } from './components/bid/bid.component';
import { CategoryComponent } from './components/category/category.component';
import { ConcactComponent } from './components/concact/concact.component';
import { ImageComponent } from './components/image/image.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { TenderDetailComponent } from './components/tender-detail/tender-detail.component';
import { TenderAddComponent } from './components/tender/tender-add/tender-add.component';
import { TenderListComponent } from './components/tender/tender-list/tender-list.component';
import { TenderUpdateComponent } from './components/tender/tender-update/tender-update.component';
import { TenderComponent } from './components/tender/tender.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  
  {path:"",pathMatch:"full",component:TenderComponent,},
  {path:"tenders",component:TenderComponent},
  {path:"tenders/category/:categoryId",component:TenderComponent},
  {path:"category",component:CategoryComponent},
  {path:"bids",component:BidComponent},
  {path:"tenders/tenderdetail/:id",component:TenderDetailComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ConcactComponent},
  {path:"my-profile",component:MyProfileComponent},
  {path:"tender/add",component:TenderAddComponent},
  {path:"tender/update",component:TenderUpdateComponent},
  {path:"image/add/:tenderId", component:ImageComponent},
  {path:"tender/list",component:TenderListComponent},
  {path:"admin/list",component:AdminComponent},
  {path:"user/list",component:UserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
