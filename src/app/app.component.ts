import { Component } from '@angular/core';
import { Advantage } from './type/advantages.type';
import { Product } from './type/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  public products: Product[] = [
    {
      title: 'Макарун с малиной',
      cost: '1,70',
      img: '1.png'
    },
    {
      title: 'Макарун с манго',
      cost: '1,70',
      img: '2.png'
    },
    {
      title: 'Пирог с ванилью',
      cost: '1,70',
      img: '3.png'
    },
    {
      title: 'Пирог с фисташками',
      cost: '1,70',
      img: '4.png'
    },
  ]

  formValues = {
    product: '',
    name: '',
    number: ''
  }

  moveTo(target: HTMLElement): void {
    target.scrollIntoView({behavior : 'smooth'});
  }

  chooseProduct(target: HTMLElement, title: string): void {
    this.formValues.product = title.toUpperCase();
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



  // document.querySelectorAll('#menu *').forEach((item) => {
  //   item.onclick = () => {
  //     document.getElementById('menu').classList.remove('open')
  //   }
  // })

  // document.getElementById('close').onclick = function () {
  //   document.getElementById('menu').classList.remove('open');
  // }

  
}
