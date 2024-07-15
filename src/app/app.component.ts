import { Component } from '@angular/core';
import { ProductType } from './type/product.type';
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

  public products: ProductType[];

  constructor(private productService : ProductsService,
    public cartService : CartService
  ) {
    this.products = productService.getProducts()
  }

  moveTo(target: HTMLElement): void {
    target.scrollIntoView({behavior : 'smooth'});
  }

  confirmProduct(title: string) {
    alert(title + ' добавлен в корзину!')
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
