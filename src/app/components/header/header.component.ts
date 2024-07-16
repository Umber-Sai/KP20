import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public number : string = '375293689868'
  
  public isActiveMenu : boolean = false;


  constructor(public scrollService : ScrollService) { }

  ngOnInit(): void {
  }

  activeMenu () {
    this.isActiveMenu = !this.isActiveMenu;
  }

}
