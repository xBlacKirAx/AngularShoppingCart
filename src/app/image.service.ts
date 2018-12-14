import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  visibleImages = [];
  getImages() {
    return this.visibleImages = Images.slice(0);
  }

  getImage(name: string) {
    return Images.slice(0).find(image => image.name === name);
  }
}

const Images = [
  {'name': 'Table', 'url': 'assets/img/table.jpg'},
  {'name': 'Chair', 'url': 'assets/img/chair.jpg'},
  {'name': 'Air Conditioner', 'url': 'assets/img/ac.jpg'},
  {'name': 'fridge', 'url': 'assets/img/fridge.JPG'},
  {'name': 'Bed', 'url': 'assets/img/bed.jpg'},
  {'name': 'iPad', 'url': 'assets/img/ipad.jpg'},
  {'name': 'iPhone', 'url': 'assets/img/iphone.png'},
];
