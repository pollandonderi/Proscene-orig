import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModalnewsComponent } from './modalnews/modalnews.component';



@NgModule({
  declarations: [
    BlogComponent,
    ModalComponent,
    ModalnewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class BlogModule { }
