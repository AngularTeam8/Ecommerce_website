import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getpostById(arg0: number) {
    throw new Error('Method not implemented.');
  }

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  getPosts() : Observable <any> {
    return this.httpClient.get(this.url)
  }
  getpostbyId(id: number) : Observable<any> {
    return this.httpClient.get(this.url + id)
  }
}
