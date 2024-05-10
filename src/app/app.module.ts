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


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FormComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SolutionsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({heroCamera,heroPhone,heroChatBubbleLeftRight, heroMapPin, heroUserGroup, heroTv,heroServerStack,heroCheckBadge,heroFingerPrint,heroClipboardDocumentCheck, heroFaceSmile,heroVideoCamera, heroChevronRight,heroLockClosed, heroBolt, heroCheck}),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
