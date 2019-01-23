import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationProfileComponent } from './navigation-profile/navigation-profile.component';

import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { UnderlineDirective } from './underline.directive';
import { CapitalizePipe } from './capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationProfileComponent,
    ProfileComponent,
    SearchComponent,
    LandingComponent,
    NotFoundComponent,
    NavigationFooterComponent,
    UnderlineDirective,
    CapitalizePipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
