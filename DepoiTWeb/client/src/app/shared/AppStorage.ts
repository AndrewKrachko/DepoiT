import { AppItem } from "./AppItem";
import { AppObject } from "./AppObject";

export class AppStorage extends AppObject {
    public nameB: string;
    public nameC: string;
    public nameSplitter: string;
    public items: AppItem[];
}