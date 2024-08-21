import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../types/data-type';

const sellerUrl = 'http://localhost:3000/seller';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  constructor(private http: HttpClient) {}

  userSignUp(data: SignUp) {
    return this.http.post(sellerUrl, data);
  }
}
