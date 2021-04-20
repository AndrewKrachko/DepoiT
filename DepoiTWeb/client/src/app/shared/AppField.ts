import { AppFieldPattern } from "./AppFieldPattern";
import { AppObject } from "./AppObject";

export class AppField extends AppObject {
    public fieldPattern: AppFieldPattern;
    public value: number;
    public valueString: string;
    public tolerance: number;
    public toleranceMin: number;
    public toleranceMax: number;
}