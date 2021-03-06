import { Component, OnInit } from "@angular/core";
import Dashboard from "../services/dashboard.service";
import { ItemListView } from "./itemListView";
import { VisibilityStatus } from "./VisibilityStatus";

@Component({
    selector: "storage-list",
    templateUrl: "./storageListView.html",
    styleUrls: ["./listView.css",],
})
export class StorageListView {

    public showItems: VisibilityStatus[] = [];

    constructor(public dashboard: Dashboard) {

    }

    changeItemsVisibility(objectToken: string) {
        let itemState = this.showItems.find(s => s.name == objectToken);

        if (itemState == undefined) {
            itemState = { name: objectToken, show: false };
            this.showItems.push(itemState);
        }

        itemState.show = !itemState.show;
        document.getElementById(objectToken).hidden = itemState.show;
    }

}

