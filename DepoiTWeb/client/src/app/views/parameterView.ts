import { Component, Input, OnInit } from "@angular/core";
import { AppField } from "../shared/AppField";
import { AppFieldPattern } from "../shared/AppFieldPattern";
import { AppFieldTypeEnum } from "../shared/AppFieldTypeEnum";
import { ItemView } from "./itemView";

@Component({
    selector: "the-parameter",
    template: "",
})
export class ParameterView implements OnInit {
    @Input() id: string;

    constructor(private itemView: ItemView) {

    }

    ngOnInit(): void {
        this.addFields(Number.parseInt(this.id));
    }

    addFields(id: number) {
        let searchedPattern = this.itemView.item.pattern.fieldPatterns.find(fp => fp.id == id);
        const parentId = this.itemView.getTheParameterId(id.toString());
        const parent = document.getElementById(parentId);

        this.addFieldName(parent, searchedPattern);
        this.addValueField(parent, searchedPattern);
        if (searchedPattern.fieldType == AppFieldTypeEnum.NumberWithTolerance) {
            this.addToleranceField(parent, searchedPattern);
        }
        if (searchedPattern.fieldType == AppFieldTypeEnum.NumberWithDifferentialTolerance) {
            this.addDoubleToleranceField(parent, searchedPattern);
        }
    }

    addFieldName(
        parent: HTMLElement,
        searchedPattern: AppFieldPattern) {

        const label = document.createElement("label");
        label.innerText = searchedPattern.name;
        label.className = "col-3";
        parent.appendChild(label);
    }

    addValueField(
        parent: HTMLElement,
        searchedPattern: AppFieldPattern) {

        let input: HTMLElement;
        let name: string;

        switch (searchedPattern.fieldType) {
            case AppFieldTypeEnum.NumberFromSet:
            case AppFieldTypeEnum.StringValueFromSet: {
                input = document.createElement("select");
                let options: any[];

                if (searchedPattern.fieldType == AppFieldTypeEnum.NumberFromSet) {
                    options = searchedPattern.valueSet;
                    name = "value";
                } else {
                    options = searchedPattern.stringSet;
                    name = "valueString";
                }
                options.forEach(op => {
                    const optionElement = document.createElement("option");
                    optionElement.text = op;
                    (<HTMLSelectElement>input).add(optionElement);
                });

                (<HTMLSelectElement>input).selectedIndex = options.indexOf(this.getValue(searchedPattern));
                break;
            }
            default: {
                input = document.createElement("input");

                if (searchedPattern.fieldType == AppFieldTypeEnum.StringValue) {
                    name = "valueString";
                } else {
                    name = "value";
                }

                (<HTMLInputElement>input).value = this.getValue(searchedPattern).toString();
            }
        }
        input.setAttribute("name", name);

        input.className = "col-3";
        parent.appendChild(input);
    }

    addToleranceField(
        parent: HTMLElement,
        searchedPattern: AppFieldPattern) {

        const toleranceInput = document.createElement("input");
        toleranceInput.setAttribute("name", "tolerance");
        toleranceInput.value = this.getTolerance(searchedPattern).toString();

        parent.appendChild(toleranceInput);
    }

    addDoubleToleranceField(
        parent: HTMLElement,
        searchedPattern: AppFieldPattern) {

        const minToleranceInput = document.createElement("input");
        const maxToleranceInput = document.createElement("input");
        minToleranceInput.setAttribute("name", "toleranceMin");
        maxToleranceInput.setAttribute("name", "toleranceMax");
        minToleranceInput.value = this.getMinTolerance(searchedPattern).toString();
        maxToleranceInput.value = this.getMaxTolerance(searchedPattern).toString();

        parent.appendChild(minToleranceInput);
        parent.appendChild(maxToleranceInput);
    }

    getValue(searchedPattern: AppFieldPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);

        if (searchedItem !== undefined) {
            if (searchedPattern.fieldType == AppFieldTypeEnum.StringValue ||
                searchedPattern.fieldType == AppFieldTypeEnum.StringValueFromSet) {
                return searchedItem.valueString;
            } else {
                return searchedItem.value;
            }
        } else {
            if (searchedPattern.fieldType == AppFieldTypeEnum.StringValue ||
                searchedPattern.fieldType == AppFieldTypeEnum.StringValueFromSet) {
                return searchedPattern.defaultString;
            } else {
                return searchedPattern.defaultValue;
            }
        }
    }

    getTolerance(searchedPattern: AppFieldPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);

        if (searchedItem !== undefined) {
            return searchedItem.tolerance;
        } else {
            return searchedPattern.tolerance;
        }
    }

    getMinTolerance(searchedPattern: AppFieldPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);

        if (searchedItem !== undefined) {
            return searchedItem.toleranceMin;
        } else {
            return searchedPattern.toleranceMin;
        }
    }

    getMaxTolerance(searchedPattern: AppFieldPattern) {
        let searchedItem = this.itemView.item.fields.find(f => f.fieldPattern.id == searchedPattern.id);

        if (searchedItem !== undefined) {
            return searchedItem.toleranceMax;
        } else {
            return searchedPattern.toleranceMax;
        }
    }
}