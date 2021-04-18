import { Component, OnInit } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "storage-list",
    templateUrl: "./storageListView.html",
    styleUrls: ["./listView.css",],
})
export class StorageListView /*implements OnInit*/ {

    constructor(public dashboard: Dashboard) {

    }

}