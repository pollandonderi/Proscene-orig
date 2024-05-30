import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3CenterLeft, heroBriefcase, heroChevronDown, heroDocumentCheck, heroHomeModern, heroStar, heroUserGroup, heroXCircle} from '@ng-icons/heroicons/outline';
import { ContactformComponent } from './contactform/contactform.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent,
    ContactformComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ContactformComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({heroXCircle,heroChevronDown, heroBars3CenterLeft,heroStar, heroDocumentCheck, heroHomeModern, heroUserGroup, heroBriefcase  }),
  ]
})
export class SharedModule { }
