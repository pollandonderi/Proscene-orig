import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { UnifiedComponent } from './unified/unified.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DigitalComponent } from './digital/digital.component';
import { GovernmentComponent } from './government/government.component';
import { LawComponent } from './law/law.component';
import { ReligiousComponent } from './religious/religious.component';
import { SharedModule } from '../shared/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowDown, heroCubeTransparent } from '@ng-icons/heroicons/outline';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';




@NgModule({
  declarations: [
    EducationComponent,
    UnifiedComponent,
    MeetingsComponent,
    DigitalComponent,
    GovernmentComponent,
    LawComponent,
    ReligiousComponent
    
  ],
  imports: [
    CommonModule,
    LazyLoadImageModule,
    SharedModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroCubeTransparent,heroArrowDown}),

  ]
})
export class SolutionsModule { }
