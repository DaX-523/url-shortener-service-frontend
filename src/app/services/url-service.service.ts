import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/api'

interface Body {
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {

  constructor(private http: HttpClient) { }

  getUrl(urlId: string) {

    return this.http.get(`${BASE_URL}/shorturl/${urlId}`)
  }

  postUrl(body: Body) {

    return this.http.post(`${BASE_URL}/shorturl`, body)
  }
}
