import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EducationComponent } from './modules/solutions/education/education.component';
import { BlogComponent } from './modules/blog/blog/blog.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { ComingSoonComponent } from './modules/shared/coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomepageComponent },
  { path: 'education', component: EducationComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'coming-soon', component: ComingSoonComponent},

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
