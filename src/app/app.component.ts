import { Component } from '@angular/core';
import { Advantage } from './type/advantages.type';
import { Product } from './type/product.type';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent {
  title = 'KP20';
  public phoneNumber: string = '+375 (29) 368-98-68';
  public showPresent: boolean = true;
  
  public formValues = {
    product: '',
    name: '',
    number: ''
  }

  public products: Product[];

  constructor(private productService : ProductsService,
    public cartService : CartService
  ) {
    this.products = productService.getProducts()
  }

  moveTo(target: HTMLElement): void {
    target.scrollIntoView({behavior : 'smooth'});
  }

  chooseProduct(target: HTMLElement, title: string, cost: number): void {
    this.formValues.product = title.toUpperCase();
    target.scrollIntoView({behavior : 'smooth'});

    this.cartService.count++;
    this.cartService.totalPrice += cost;
    this.cartService.products.push(title)
  }

  validation() {
    if(this.formValues.product && this.formValues.name && this.formValues.number) {
      alert('Ваша заявка принята!');
      this.formValues = {
        product: '',
        name: '',
        number: ''
      }
    } else {
      alert('Заполните поля');
    }
  }
  
}
