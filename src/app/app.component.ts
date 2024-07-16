import { Component, Input } from '@angular/core';
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
  @Input() tel : string = ''
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

  confirmProduct(title: string, target : HTMLElement, input : HTMLInputElement) {
    alert(title + ' добавлен в корзину!');
    input.value = title
    target.scrollIntoView({behavior : 'smooth'});
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
