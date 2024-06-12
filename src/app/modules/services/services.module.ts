import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SupportCountrywideComponent } from './support-countrywide/support-countrywide.component';
import { CollaborationAsAServiceComponent } from './collaboration-as-a-service/collaboration-as-a-service.component';
import { AvRoomDesignComponent } from './av-room-design/av-room-design.component';
import { ProfessionalComponent } from './professional/professional.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroCubeTransparent, heroArrowDown, heroDevicePhoneMobile, heroCog, heroArrowsPointingIn, heroBanknotes, heroArrowPathRoundedSquare, heroCloudArrowDown } from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [
 
  
    SupportCountrywideComponent,
         CollaborationAsAServiceComponent,
         AvRoomDesignComponent,
         ProfessionalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgIconsModule.withIcons({heroBanknotes,heroArrowPathRoundedSquare,heroCloudArrowDown,heroDevicePhoneMobile,heroCog,heroArrowsPointingIn,heroCubeTransparent,heroArrowDown}),
  ]
})
export class ServicesModule { }
