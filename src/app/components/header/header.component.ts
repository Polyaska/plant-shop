import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  public tabsList: MenuItem[] = [
    {label: 'Войти', routerLink: '/auth'},
    {label: 'Каталог', routerLink: '/catalog'},
    {label: 'Доставка', routerLink: '/delivery'},
    {label: 'Корзина', routerLink: '/order'},
  ];
  public menuIcon: SidebarModule[] =[
    {}
  ]
  public displayMobileMenu: boolean = false;

  constructor() {}

  public showMobileMenu(): void {
    this.displayMobileMenu = !this.displayMobileMenu;
  }
}
