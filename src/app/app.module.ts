import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroCamera } from '@ng-icons/heroicons/outline';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgIconsModule.withIcons({heroCamera}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
