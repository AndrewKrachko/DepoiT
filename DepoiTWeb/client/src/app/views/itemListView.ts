import { Component, Input, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import Dashboard from "../services/dashboard.service";
import { AppItem } from "../shared/AppItem";

@Component({
    selector: "item-list",
    templateUrl: "./itemListView.html",
    styleUrls: ["./listView.css",],
})
export class ItemListView implements OnInit {
    @Input() storageId: number;
    public items: AppItem[];

    constructor(public dashboard: Dashboard) {

    }
    ngOnInit(): void {
        this.dashboard.getItems(this.storageId).pipe(map(data => this.items = data)).subscribe();
    }

    getItems() {
        
    }

}