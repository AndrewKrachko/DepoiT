import { Component } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "item-list",
    templateUrl: "./itemListView.html",
    styleUrls: ["./listView.css",],
})
export class ItemListView {
    constructor(dashboard: Dashboard) {

    }
}