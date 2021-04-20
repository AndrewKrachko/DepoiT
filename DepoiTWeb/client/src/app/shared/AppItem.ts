import { AppField } from "./AppField";
import { AppObject } from "./AppObject";
import { AppPattern } from "./AppPattern";

export class AppItem extends AppObject {
    public pattern: AppPattern;
    public fields: AppField[];
}