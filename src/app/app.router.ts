import { Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageTeamComponent } from './pages/page-team/page-team.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: 'team',
    component: PageTeamComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  }
];
