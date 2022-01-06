import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.scss'],
})
export class LandingFormComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.userForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, Validators.maxLength(50)]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
            Validators.minLength(3),
          ],
        ],
        workplace: ['', [Validators.required]],
        country: [''],
        number: [''],
        message: [''],
      },

      { updateOn: 'submit' }
    );
  }

  sendForm() {
    if (this.userForm.invalid) {
      return Object.values(this.userForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) => {
            control.markAllAsTouched();
          });
        } else {
          control.markAsTouched();
        }
      });
    }
  }

  hasError(form: string, control: string) {
    return (
      this[form].get(control).invalid &&
      (this[form].get(control).dirty || this[form].get(control).touched)
    );
  }
}
