import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { TenderDetailComponent } from './components/tender-detail/tender-detail.component';

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
    TenderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
