import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior : 'smooth'})
  }
}
