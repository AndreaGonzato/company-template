import {Routes} from '@angular/router';
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
    {path: 'contact', component: ContactPageComponent},
    {path: 'home', component: HomePageComponent},
    {path: '', component: HomePageComponent},
];
