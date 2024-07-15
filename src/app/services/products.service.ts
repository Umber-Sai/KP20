import { Injectable } from '@angular/core';
import { Product } from '../type/product.type';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts ():Product[] {
    return [
      {
        title: 'Макарун с малиной',
        cost: 1.70,
        img: '1.png'
      },
      {
        title: 'Макарун с манго',
        cost: 1.70,
        img: '2.png'
      },
      {
        title: 'Пирог с ванилью',
        cost: 1.70,
        img: '3.png'
      },
      {
        title: 'Пирог с фисташками',
        cost: 1.70,
        img: '4.png'
      },
    ]
  }
}
