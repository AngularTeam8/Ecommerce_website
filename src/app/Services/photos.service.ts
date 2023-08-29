import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = "https://jsonplaceholder.typicode.com/photos"
  photos: {};
  constructor(private _photos: HttpClient) {}
  getPhotos(){
     return this._photos.get(this.url) 
  }
}
