import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  sheridanForm: FormGroup;
  colors = ['Red', 'Blue', 'Green', 'Yellow']; // Example color options
  engines = ['V6', 'V8', 'Electric', 'Hybrid']; // Example engine options

  constructor(private fb: FormBuilder) {
    this.sheridanForm = this.fb.group({
      studentId: ['', Validators.required],
      studentLogin: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      color: ['', Validators.required],
      engine: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.sheridanForm.valid) {
      console.log(this.sheridanForm.value);
    }
  }
}
