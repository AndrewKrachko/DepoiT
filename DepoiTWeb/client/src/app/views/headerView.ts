import { Component } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "header-section",
    templateUrl: "./headerView.html",
    styleUrls: ["./listView.css",],
})
export class HeaderView {
    constructor(public dashboard: Dashboard) {

    }
}