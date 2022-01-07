import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  apiUrl = "https://localhost:37281";
  images : Image[]=[];
  addImageForm:FormGroup;
  currentTenderId:number;
  currentFile:File;

  constructor(private formBuilder:FormBuilder, private activatedRoute: ActivatedRoute,private imageService:ImageService) { }

  
  ngOnInit(): void {
    this.createAddImageForm();
    this.activatedRoute.params.subscribe(params=>{
      this.getTenderImages(params["tenderId"]);
      this.currentTenderId = params["tenderId"];
    })
  }

  onFileChange(event:any){
    if (event.target.files.length > 0) {
      this.currentFile = event.target.files[0];
    }
  }

  addImage(tenderId:number){
    if(this.currentFile){
      const formData = new FormData();
      formData.append('TenderId', tenderId.toString())
      formData.append('Image', this.currentFile)
      this.imageService.add(formData).subscribe( response => {
      
        this.getTenderImages(tenderId)
        this.addImageForm.reset()
      }, responseError => {
        if(responseError.error.Errors.length>0){
          console.log("Hata")
        }
      })
    }
  }

  deleteImage(image:Image){
    this.imageService.delete(image).subscribe(response=>{
     
      this.getTenderImages(image.tenderId)
    });
  }
  
  getTenderImages(id:number){
    this.imageService.getImages(id).subscribe(response=>{
      this.images= response.data;
    });  
  }

  createAddImageForm(){
    this.addImageForm = this.formBuilder.group({
      Image: ["", Validators.required],
    });
  }

}
