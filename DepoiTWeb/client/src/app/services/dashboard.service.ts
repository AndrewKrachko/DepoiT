import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppDepot } from "../shared/AppDepot";
import { LoginRequest, LoginResult } from "../shared/LoginResults";
import { map } from "rxjs/operators";

@Injectable()
export default class Dashboard {
    public depots: AppDepot[] = [];

    public token: string = "";
    public tokenExpDate: Date = new Date();
    errorMessage = "";

    constructor(private http: HttpClient) {

    }

    get loginRequred(): boolean {
        return this.token.length === 0 || this.tokenExpDate < new Date();
    }

    login(creds: LoginRequest) {
        return this.http.post<LoginResult>("/api/authenticate/createtoken", creds).pipe(map(data => {
            this.token = data.token;
            this.tokenExpDate = data.tokenExpDate;
        }));
    }

    getDepots() {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
        return this.http.post<AppDepot[]>("/api/Depot/getbyparent", "", { headers: headers }).pipe(map(data => this.depots = data));
    }
}