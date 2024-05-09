import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EducationComponent } from './modules/solutions/education/education.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomepageComponent },
  { path: 'education', component: EducationComponent },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
