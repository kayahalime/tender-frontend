import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  dataLoaded =false;
  currentCategory: Category = {categoryId:-1, categoryName:''};
  filterText = "";
  
  constructor(private categoryService: CategoryService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
    
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded=true;
    });
  }
  getByFilter(categoryId:number){
    
    
     this.router.navigate(["tenders/categoryFilter/"+categoryId]);

   }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  removeCurrentCategory(){
    this.filterText = "";
    this.currentCategory = {categoryId:-1,categoryName:""};
  }
   getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  
}
