// ---------------------------------------
// Email: quickapp@ebenmonney.com
// Templates: www.ebenmonney.com/templates
// (c) 2024 www.ebenmonney.com/mit-license
// ---------------------------------------

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fadeInOut } from '../../services/animations';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  animations: [fadeInOut]

})
export class FormComponent {
  name = new FormControl('');
  currentCount = 0;

  incrementCounter() {
    this.currentCount++;
  }
}

