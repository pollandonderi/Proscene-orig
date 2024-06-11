import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroBolt, heroCamera, heroChatBubbleLeftRight, heroCheck, heroCheckBadge, heroChevronRight, heroClipboardDocumentCheck, heroFaceSmile, heroFingerPrint, heroLockClosed, heroMapPin, heroPhone, heroServerStack, heroTv, heroUserGroup, heroVideoCamera } from '@ng-icons/heroicons/outline';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SolutionsModule } from './modules/solutions/solutions.module';
import { BlogModule } from './modules/blog/blog.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    SharedModule,
    ContactUsModule,
    SolutionsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({heroCamera,heroPhone,heroChatBubbleLeftRight, heroMapPin, heroUserGroup, heroTv,heroServerStack,heroCheckBadge,heroFingerPrint,heroClipboardDocumentCheck, heroFaceSmile,heroVideoCamera, heroChevronRight,heroLockClosed, heroBolt, heroCheck}),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
