import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("https://api.vatcomply.com/rates");
  }

  getDataRate(base: string = "EUR") {
    return this.http.get("https://api.vatcomply.com/rates?base=" + base)
  }
}
