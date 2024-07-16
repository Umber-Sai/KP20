import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'component-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public number : string = '375293689868'

  constructor() {
   }

  ngOnInit(): void {
  }

}
