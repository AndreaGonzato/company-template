import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ContactPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'company-app';
}
