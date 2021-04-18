import { Component, OnInit } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "user-pannel",
    templateUrl: "./userPannelView.html",
    styleUrls: ["./listView.css",],
})
export class UserPannelView implements OnInit {
    public userMenuShow: boolean = false;

    constructor(public dashboard: Dashboard) {

    }

    ngOnInit(): void {
        this.dashboard.getUser().subscribe();
    }

    changeMenuVisibility() {
        this.userMenuShow = !this.userMenuShow;
    }
}