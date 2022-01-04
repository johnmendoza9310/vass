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

      
    })


  }

}
