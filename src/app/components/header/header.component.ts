import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public number : string = '375293689868'
  
  constructor() { }

  ngOnInit(): void {
  }

  openMenu(target: HTMLElement):void {
    target.classList.add('open');
  }

  closeMenu(target: HTMLElement):void {
    target.classList.remove('open');
  }

}
