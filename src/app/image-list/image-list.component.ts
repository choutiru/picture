import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images: any[];

  constructor(private imageService: ImageService) { }

  handleSuccess(data){
    this.images = data.hits;
    console.log(data.hits);
  }

  searchImages(query: string){
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => console.log(error),
      () => console.log('Request complete! QUERY : ' + query)
    );
  }

  ngOnInit() {
  }

}
