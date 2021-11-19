import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { TenderComponent } from './components/tender/tender.component';

const routes: Routes = [
  
  {path:"",pathMatch:"full",component:TenderComponent,},
  {path:"tenders",component:TenderComponent},
  {path:"tenders/category/:categoryId",component:TenderComponent},
  {path:"category",component:CategoryComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
