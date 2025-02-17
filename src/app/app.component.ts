import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TabMenuComponent} from "./tab-menu/tab-menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TabMenuComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'company-app';
}
