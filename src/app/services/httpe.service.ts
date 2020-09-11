import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Product {
  description: string;
  id: string;
  image: object;
  ingredients: object;
  title: string
}


@Injectable({


  providedIn: 'root'
})
export class HttpeService {
  configUrl = 'https://api.mediehuset.net/bakeonline/';
  configUrlProduct = 'https://api.mediehuset.net/bakeonline/products';
  configUrlComments = 'https://api.mediehuset.net/bakeonline/comments/';

  constructor(private http: HttpClient) {
  }

  getData() {
    console.log(this.http.get(this.configUrl));

    return this.http.get(this.configUrl);
  }

  getSingleData(id) {
    return this.http.get<Product>(this.configUrlProduct+ '/' + id);
  }
  getProducts() {

    return this.http.get<Product>(this.configUrlProduct);
  }

  getComments(auth, id) {
    console.log(this.http.get(this.configUrlComments + id));
    return this.http.get(this.configUrlComments + id);
  }
  getLogin(loginInfo) {
    return this.http.post('https://api.mediehuset.net/token', loginInfo);
  }

  //postcontact(data){
    // return this.http.post( 'url', data)
  // }
}
