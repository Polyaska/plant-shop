import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.scss']
})
export class HeaderSmallComponent {

  public tabsList: MenuItem[] = [
    {label: 'Войти', routerLink: '/auth'},
    {label: 'Каталог', routerLink: '/catalog'},
    {label: 'Доставка', routerLink: '/delivery'},
    {label: 'Корзина', routerLink: '/order'},
  ];

  public displayMobileMenu: boolean = false;

  constructor() {}

  public showMobileMenu(): void {
    this.displayMobileMenu = !this.displayMobileMenu;
  }
}

