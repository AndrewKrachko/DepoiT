import { AppFieldTypeEnum } from "./AppFieldTypeEnum";
import { AppObject } from "./AppObject";
import { AppUser } from "./AppUser";

export class AppFieldPattern extends AppObject {
    public isRequired: boolean;
    public fieldType: AppFieldTypeEnum;
    public owner: AppUser;

    public defaultValue: number;
    public defaultString: string;
    public tolerance: number;
    public toleranceMin: number;
    public toleranceMax: number;
    public stringSet: string[];
    public valueSet: number[];

}