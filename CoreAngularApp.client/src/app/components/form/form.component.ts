// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeInOut } from '../../services/animations';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  animations: [fadeInOut]

})
export class FormComponent implements OnInit{
  myForm = new FormGroup({
    field1: new FormControl<number>(0),
    field2: new FormControl<number>(0)
  });

  name = new FormControl('');
  currentCount = 0;
  constructor(private formBuilder: FormBuilder) {}

  incrementCounter() {
    this.currentCount++;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      field1: [0, Validators.required],
      field2: [0, Validators.required],
    });

    // Subscribe to field1 value changes
    this.myForm.controls.field1.valueChanges.subscribe((value) => {
      // Update field2 based on field1 value (e.g., perform calculations)
      if (value == null) {
        value = 1;
      }
      this.myForm.controls.field2.setValue(value * 2); // Example: double the value
    });
  }
}

