import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from "primeng/ripple";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContactPageComponent, HomePageComponent, Button, ButtonDirective, Ripple, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'company-app';
}
