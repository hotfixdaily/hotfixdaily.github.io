import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "src/app/views/header/header.component";
import { HomepageComponent } from './views/homepage/homepage.component';
import { AllPostsComponent } from './views/homepage/all-posts/all-posts.component';
import { PopularPostsComponent } from './views/homepage/popular-posts/popular-posts.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomepageComponent, AllPostsComponent, PopularPostsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
