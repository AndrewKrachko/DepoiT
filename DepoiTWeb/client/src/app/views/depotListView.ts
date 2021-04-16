import { Component, OnInit } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "depot-list",
    templateUrl: "./depotListView.html",
    styleUrls: ["./listView.css",],
})
export class DepotListView implements OnInit {

    constructor(public dashboard: Dashboard) {

    }

    ngOnInit(): void {
        this.dashboard.getDepots().subscribe();
    }

}