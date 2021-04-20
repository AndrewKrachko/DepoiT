import { Component, Input, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import Dashboard from "../services/dashboard.service";
import { AppField } from "../shared/AppField";
import { AppFieldPattern } from "../shared/AppFieldPattern";
import { AppFieldTypeEnum } from "../shared/AppFieldTypeEnum";
import { AppItem } from "../shared/AppItem";
import { ItemListView } from "./itemListView";

@Component({
    selector: "the-item",
    templateUrl: "./itemView.html",
    styleUrls: ["./itemView.css",],
})
export class ItemView implements OnInit {

    @Input() itemId: string;
    public item: AppItem;
    public prefix: string = "parameter-";

    constructor(public dashboard: Dashboard,
        private itemListView: ItemListView) {

    }

    ngOnInit(): void {
        const id: number = Number.parseInt(this.itemId.replace(this.itemListView.prefix, ""));
        this.dashboard.getItem(id).pipe(map(data => this.item = data)).subscribe();
    }

    getTheParameterId(id: string) {
        return `${this.itemId}-${this.prefix}${id}`;
    }
}