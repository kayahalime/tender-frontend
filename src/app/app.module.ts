import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { NavComponent } from './components/nav/nav.component';
import { TenderComponent } from './components/tender/tender.component';
import { AdminComponent } from './components/admin/admin.component';
import { BidComponent } from './components/bid/bid.component';
import { ClientComponent } from './components/client/client.component';
import { ImageComponent } from './components/image/image.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryPipe } from './pipes/category.pipe';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TenderDetailComponent } from './components/tender-detail/tender-detail.component';
import { AboutComponent } from './components/about/about.component';
import { ConcactComponent } from './components/concact/concact.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { TenderAddComponent } from './components/tender/tender-add/tender-add.component';
import { TenderUpdateComponent } from './components/tender/tender-update/tender-update.component';
import { TenderListComponent } from './components/tender/tender-list/tender-list.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TenderComponent,
    CategoryComponent,
    AdminComponent,
    BidComponent,
    ClientComponent,
    ImageComponent,
    LoginComponent,
    RegisterComponent,
    CategoryPipe,
    CategoryFilterComponent,
    FilterPipePipe,
    TenderDetailComponent,
    AboutComponent,
    ConcactComponent,
    MyProfileComponent,
    TenderAddComponent,
    TenderUpdateComponent,
    TenderListComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
