import { Component, Input, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import Dashboard from "../services/dashboard.service";
import { AppItem } from "../shared/AppItem";
import { VisibilityStatus } from "./VisibilityStatus";

@Component({
    selector: "item-list",
    templateUrl: "./itemListView.html",
    styleUrls: ["./listView.css",],
})
export class ItemListView implements OnInit {
    @Input() storageId: number;
    public items: AppItem[];
    public showItems: VisibilityStatus[] = [];
    public prefix: string = "item-";

    constructor(public dashboard: Dashboard) {

    }

    ngOnInit(): void {
        this.dashboard.getItems(this.storageId).pipe(map(data => this.items = data)).subscribe();
    }

    getTheItemId(id: string) {
        return this.prefix + id;
    }

    changeItemVisibility(objectToken: string) {
        let itemState = this.showItems.find(s => s.name == objectToken);

        if (itemState == undefined) {
            itemState = { name: objectToken, show: false };
            this.showItems.push(itemState);
        }

        itemState.show = !itemState.show;
        document.getElementById(this.prefix + objectToken).hidden = itemState.show;
    }

}