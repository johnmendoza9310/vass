import { Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private wasInside = false;

  @Input() option;
  @HostListener('click')
  clickInside(){
    this.wasInside = true;
    
  }

  
  @HostListener('document:click') 
  clickOut(){
    if (!this.wasInside) {
      this.options = false;
            
    }

    this.wasInside = false;


    
    
  }

  public options: boolean = false;
  public optionsNormal=null;

  constructor( private elementRef: ElementRef) {

    console.log('sin clicks');
    

    
    
   }

  ngOnInit(): void {

    console.log('opciones', this.option);
  }

  showOptions():void{

    this.options = !this.options;
    this.optionsNormal = this.options;



  }






}
