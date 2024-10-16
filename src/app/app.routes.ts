import { Routes } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import {SearchComponent} from './search/search.component';


export const routes: Routes = [
  { path:'home', component: HomePageComponent },
  { path:'search', component: SearchComponent },
];
