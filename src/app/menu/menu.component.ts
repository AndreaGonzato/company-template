import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {TabMenuModule} from "primeng/tabmenu";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [
        MenubarModule,
        TabMenuModule,
        NgIf
    ],
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit  {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Home', icon: 'pi pi-home', route: '/home' },
            { label: 'Contact', icon: 'pi pi-home', route: '/contact' },
            { label: 'External', icon: 'pi pi-link', url: 'https://angular.io/' }
        ];
    }
}
