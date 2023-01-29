import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header-big',
  templateUrl: './header-big.component.html',
  styleUrls: ['./header-big.component.scss']
})
export class HeaderBigComponent {

  public tabsList: MenuItem[] = [
    {label: 'Войти', routerLink: '/auth'},
    {label: 'Каталог', routerLink: '/catalog'},
    {label: 'Доставка', routerLink: '/delivery'},
    {label: 'Корзина', routerLink: '/order'},
  ];
}
