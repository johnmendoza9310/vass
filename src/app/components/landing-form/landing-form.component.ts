import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.scss']
})
export class LandingFormComponent implements OnInit {

  public userForm: FormGroup

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }


  createForm(){

    this.userForm = this.formBuilder.group({

      fullName: ['', [Validators.minLength(6), Validators.maxLength(50)]],
      email: ['',   [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.minLength(3)]],
      workplace: ['', [Validators.minLength(3)]],
      country: ['', Validators.required],
      number: ['', Validators.minLength(5)],
      message: ['', Validators.minLength(3)]
  },

  { updateOn: 'submit' }
    );
}

}
