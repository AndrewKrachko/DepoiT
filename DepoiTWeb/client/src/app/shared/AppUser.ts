import { AppObject } from "./AppObject";

export class AppUser extends AppObject {
    public userToken: string;
    public email: string;
    public avatar: string;
}