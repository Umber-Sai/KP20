import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductType } from 'src/app/type/product.type';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product : ProductType = {} as ProductType

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  chooseProduct(title: string, cost: number): void {
    // this.formValues.product = title.toUpperCase();
    // target.scrollIntoView({behavior : 'smooth'});

    this.cartService.count++;
    this.cartService.totalPrice += cost;
    this.cartService.products.push(title);
    this.addToCartEvent.emit(title);
  }

}
