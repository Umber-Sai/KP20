import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count: number = 0;
  totalPrice: number = 0;
  products : string[] = []
  constructor() { }
}
