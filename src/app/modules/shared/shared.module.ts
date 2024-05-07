import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { heroBars3CenterLeft, heroChevronDown} from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgIconsModule.withIcons({heroChevronDown, heroBars3CenterLeft,  }),
  ]
})
export class SharedModule { }
