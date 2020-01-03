import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, PagenotfoundComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  exports:[HeaderComponent,FooterComponent,PagenotfoundComponent]
})
export class SharedModule { }
