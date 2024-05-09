import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroCamera, heroEllipsisVertical, heroShare, heroVideoCamera } from '@ng-icons/heroicons/outline';




@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroCamera, heroShare, heroVideoCamera, heroEllipsisVertical}),
  ]
})
export class ComponentsModule { }
