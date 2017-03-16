import { Component, OnInit } from '@angular/core';
import {Field} from "../../models/field";
import {FieldConfig} from "../../models/field-config";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements Field{

  config:FieldConfig;
  group:FormGroup;
}
