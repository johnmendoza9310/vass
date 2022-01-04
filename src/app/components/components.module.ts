import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingFormComponent } from './landing-form/landing-form.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    LandingFormComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    NavbarComponent,
    LandingFormComponent
  ]
})
export class ComponentsModule { }
