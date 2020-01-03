import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesComponent } from './services/services.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'our-team',
    component:OurTeamComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
