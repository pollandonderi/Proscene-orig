import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private url = 'https://mocki.io/v1/f534d01d-a0a6-4d33-9a6a-f655e54b339b  ';
  constructor( private httpClient:HttpClient) { }
  getnews(){
    return this.httpClient.get<{ articles: any[] }>(this.url);
  }
}


