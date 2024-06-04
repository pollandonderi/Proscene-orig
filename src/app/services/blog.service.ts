import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BlogService {
private url = 'https://mocki.io/v1/8eb61489-ddad-4afd-9e3c-1dccbb1eb4ee  ';
  constructor( private httpClient:HttpClient) { }
  getblogs(){
    return this.httpClient.get<{ articles: any[] }>(this.url);
  }
}

