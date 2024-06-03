import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    BlogComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogModule { }
