import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppDepot } from "../shared/AppDepot";
import { LoginRequest, LoginResult } from "../shared/LoginResults";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { AppStorage } from "../shared/AppStorage";
import { AppUser } from "../shared/AppUser";
import { AppItem } from "../shared/AppItem";


@Injectable()
export default class Dashboard {
    public appName: string = "DepoiT";
    public user: AppUser;

    public depots: AppDepot[] = [];
    public activeDepots: number;
    public storages: AppStorage[] = [];

    errorMessage = "";

    constructor(private http: HttpClient) {

    }

    get loginRequred(): Observable<boolean> {
        return this.http.post<boolean>("/api/authenticate/istokenvalid", null, this.getHeaders());
    }

    login(creds: LoginRequest) {
        return this.http.post<LoginResult>("/api/authenticate/createtoken", creds).pipe(map(data => {
            this.setSession(data.token);
        }));
    }

    getUser() {
        return this.http.post<AppUser>("/api/user/getme", "", this.getHeaders()).pipe(map(data => this.user = data));
    }

    private setSession(token: string) {
        localStorage.setItem('id_token', token);
    }

    logout() {
        localStorage.removeItem("id_token");
    }

    private getHeaders() {
        return { headers: new HttpHeaders().set("Authorization", `Bearer ${localStorage.getItem("id_token")}`) };
    }

    getDepots() {
        return this.http.post<AppDepot[]>("/api/depot/getbyparent", "", this.getHeaders()).pipe(map(data => this.depots = data));
    }

    setActiveDepot(depotId: number) {
        this.activeDepots = depotId;
        this.getStorages().subscribe();
    }

    getStorages() {
        return this.http.post<AppStorage[]>("/api/storage/getbyparent", this.activeDepots, this.getHeaders()).pipe(map(data => this.storages = data));
    }

    getItems(storageId: number) {
        return this.http.post<AppItem[]>("/api/item/getbyparent", storageId, this.getHeaders());
    }

    getItem(itemId: number) {
        return this.http.post<AppItem>("/api/item/get", itemId, this.getHeaders());
    }

}