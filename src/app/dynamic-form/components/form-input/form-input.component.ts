import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldConfig} from "../../models/field-config";
import {Field} from "../../models/field";

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements Field {
  config:FieldConfig;
  group:FormGroup;
}
