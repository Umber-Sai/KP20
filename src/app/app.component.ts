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
  public advantages: Advantage[] = [
    {
      id: 1,
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      id: 2,
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      id: 3,
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      id: 4,
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

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
