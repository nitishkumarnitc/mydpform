import { Component, OnInit } from '@angular/core';
import {Field} from "../../models/field";
import {FieldConfig} from "../../models/field-config";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements Field {

  config:FieldConfig;
  group:FormGroup;

}
