import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { EducationComponent } from './modules/solutions/education/education.component';
import { BlogComponent } from './modules/blog/blog/blog.component';
import { ContactUsComponent } from './modules/contact-us/contact-us/contact-us.component';
import { ComingSoonComponent } from './modules/shared/coming-soon/coming-soon.component';
import { UnifiedComponent } from './modules/solutions/unified/unified.component';
import { MeetingsComponent } from './modules/solutions/meetings/meetings.component';
import { DigitalComponent } from './modules/solutions/digital/digital.component';
import { LawComponent } from './modules/solutions/law/law.component';
import { ReligiousComponent } from './modules/solutions/religious/religious.component';
import { GovernmentComponent } from './modules/solutions/government/government.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { ProfessionalComponent } from './modules/services/professional/professional.component';
import { AvRoomDesignComponent } from './modules/services/av-room-design/av-room-design.component';
import { SupportCountrywideComponent } from './modules/services/support-countrywide/support-countrywide.component';
import { CollaborationAsAServiceComponent } from './modules/services/collaboration-as-a-service/collaboration-as-a-service.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomepageComponent },
  { path: 'education', component: EducationComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'coming-soon', component: ComingSoonComponent},
  { path: 'unified-communications', component: UnifiedComponent},
  { path: 'meetings', component: MeetingsComponent},
  { path: 'digital-signage', component: DigitalComponent},
  { path: 'law', component: LawComponent},
  { path: 'religious', component: ReligiousComponent},
  { path: 'government', component: GovernmentComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: 'terms-of-use', component: TermsOfUseComponent},
  { path: 'collaboration-as-a-service', component: CollaborationAsAServiceComponent},
  { path: 'globalsupport', component: SupportCountrywideComponent},
  { path: 'AV-room-design', component: AvRoomDesignComponent},
  { path: 'professional', component: ProfessionalComponent},

  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'top'
  })],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
