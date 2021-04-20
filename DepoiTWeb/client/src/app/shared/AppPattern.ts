import { AppFieldPattern } from "./AppFieldPattern";
import { AppObject } from "./AppObject";
import { AppUser } from "./AppUser";

export class AppPattern extends AppObject {
    public fieldPatterns: AppFieldPattern[];
    public owner: AppUser;
}