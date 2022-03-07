import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardsComponent } from './cards/cards.component';
import { BubbleLinksComponent } from './bubble-links/bubble-links.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpService } from './services/http.service';
import { FloatingChatComponent } from './floating-chat/floating-chat.component';
import { HomepageComponent } from './homepage/homepage.component';

import { APIExamplesModule } from './api-examples/api-examples.module';
import { PremierLeagueComponent } from './premier-league/premier-league.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardsComponent,
    BubbleLinksComponent,
    BlogsComponent,
    FloatingChatComponent,
    HomepageComponent,
    PremierLeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    APIExamplesModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
