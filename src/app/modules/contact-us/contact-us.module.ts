import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { SharedModule } from '../shared/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroCursorArrowRays, heroPhoneArrowUpRight, heroXCircle, heroChevronDown, heroBars3CenterLeft, heroStar, heroDocumentCheck, heroHomeModern, heroUserGroup, heroBriefcase, heroArrowLongRight, heroHandThumbUp, heroHeart } from '@ng-icons/heroicons/outline';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   ReactiveFormsModule,
    NgIconsModule.withIcons({heroHeart,heroHandThumbUp,heroArrowLongRight,heroCursorArrowRays,heroPhoneArrowUpRight,heroXCircle,heroChevronDown, heroBars3CenterLeft,heroStar, heroDocumentCheck, heroHomeModern, heroUserGroup, heroBriefcase  }),
  ]
})
export class ContactUsModule { }
