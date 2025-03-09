import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
@NgModule({
  declarations: [AppComponent, HomeSectionComponent, SocialLinksComponent, AboutMeComponent, WorkComponent, ContactComponent, NavbarComponent, LandingPageComponent],
  imports: [BrowserModule, MatButtonModule, AppRoutingModule, MatTabsModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
