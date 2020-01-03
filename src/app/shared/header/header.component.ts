import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  home(){    
    this.router.navigate(['/home']);
    document.documentElement.scrollTop=0;
  }
  aboutus(){    
    this.router.navigate(['/about-us']);
    document.documentElement.scrollTop=0;
  }
  portfolio(){
    document.documentElement.scrollTop=0;    
    this.router.navigate(['/portfolio']);
    
  }
  services(){    
    this.router.navigate(['/services']);
    document.documentElement.scrollTop=0;
  }
  ourTeam(){    
    this.router.navigate(['/our-team']);
    document.documentElement.scrollTop=0;
  }
  contactUs(){    
    this.router.navigate(['/contact-us']);
    document.documentElement.scrollTop=0;
  }

}
