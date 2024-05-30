import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { VideowallsComponent } from './videowalls/videowalls.component';
import { UnifiedComponent } from './unified/unified.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { DigitalComponent } from './digital/digital.component';
import { GovernmentComponent } from './government/government.component';
import { LawComponent } from './law/law.component';
import { ReligiousComponent } from './religious/religious.component';
import { SharedModule } from '../shared/shared.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroArrowDown } from '@ng-icons/heroicons/outline';




@NgModule({
  declarations: [
    EducationComponent,
    VideowallsComponent,
    UnifiedComponent,
    MeetingsComponent,
    DigitalComponent,
    GovernmentComponent,
    LawComponent,
    ReligiousComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({heroArrowDown}),

  ]
})
export class SolutionsModule { }
