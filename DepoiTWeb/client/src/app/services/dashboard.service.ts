import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppDepot } from "../shared/AppDepot";
import { LoginRequest, LoginResult } from "../shared/LoginResults";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AppStorage } from "../shared/AppStorage";


@Injectable()
export default class Dashboard {
    public depots: AppDepot[] = [];
    public activeDepots: number;
    public storages: AppStorage[] = [];

    public token: string = "";
    public tokenExpDate: Date = new Date();
    errorMessage = "";

    constructor(private http: HttpClient) {

    }

    get loginRequred(): Observable<boolean> {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`);
        return this.http.post<boolean>("/api/authenticate/istokenvalid", null, { headers: headers });
    }

    login(creds: LoginRequest) {
        return this.http.post<LoginResult>("/api/authenticate/createtoken", creds).pipe(map(data => {
            this.token = data.token;
            this.tokenExpDate = data.tokenExpDate;
            this.setSession();
        }));
    }

    private setSession() {
        localStorage.setItem('id_token', this.token);
    }

    logout() {
        localStorage.removeItem("id_token");
    }

    private getHeaders() {
        return { headers: new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`) };
    }

    getDepots() {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`);
        return this.http.post<AppDepot[]>("/api/depot/getbyparent", "", { headers: headers }).pipe(map(data => this.depots = data));
    }

    setActiveDepot(depotId: number) {
        this.activeDepots = depotId;
        this.getStorages().subscribe();
    }

    getStorages() {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`);
        return this.http.post<AppStorage[]>("/api/storage/getbyparent", this.activeDepots, { headers: headers }).pipe(map(data => this.storages = data));
    }

    getItems(storageId: number) {
        const headers = new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`);
        return this.http.post<AppStorage[]>("/api/storage/getbyparent", this.activeDepots, { headers: headers }).pipe(map(data => this.storages = data));
    }

}