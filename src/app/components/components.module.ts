import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingFormComponent } from './landing-form/landing-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LandingFormComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    NavbarComponent,
    LandingFormComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
