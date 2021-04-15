import { Component } from '@angular/core';
import Dashboard from './services/dashboard.service';

@Component({
    selector: "the-dashboard",
    templateUrl: "./app.component.html",
    styleUrls: []
})
export class AppComponent {
    title = 'Dashboard';

    constructor(public dashboard: Dashboard) {

    }
}
