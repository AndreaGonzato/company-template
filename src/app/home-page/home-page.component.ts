import {Component, OnInit} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {BackEndManagerService} from "../back-end-manager.service";

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        AsyncPipe
    ],
    templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit{

    public label: string ='default value decided by front-end';

    constructor(private backEndManagerService: BackEndManagerService) {}

    public ngOnInit() {
        this.backEndManagerService.getTestJSON().subscribe((JSONText) => {
            this.label = JSONText.text;
        })
    }
}
