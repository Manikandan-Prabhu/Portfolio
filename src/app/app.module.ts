import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
@NgModule({
  declarations: [AppComponent, HomeSectionComponent, SocialLinksComponent],
  imports: [BrowserModule, MatButtonModule, AppRoutingModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
