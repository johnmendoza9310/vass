import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingFormComponent } from './landing-form/landing-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    LandingFormComponent,
    NavbarComponent,
    FooterComponent,
    HeadComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    NavbarComponent,
    LandingFormComponent,
    FooterComponent,
    BodyComponent,
    HeadComponent
  ]
})
export class ComponentsModule { }
