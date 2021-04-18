import { Component } from "@angular/core";
import Dashboard from "../services/dashboard.service";

@Component({
    selector: "footer-section",
    templateUrl: "./footerView.html",
    styleUrls: ["./footerView.css"],
})
export class FooterView {
    constructor(public dashboard: Dashboard) {

    }
}