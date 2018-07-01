import { Routes } from '@angular/router';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageTeamComponent } from './pages/page-team/page-team.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'team',
    component: PageTeamComponent
  },
  {
    path: 'about',
    component: PageAboutComponent
  },
  {
    path: '',
    component: PageMainComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
