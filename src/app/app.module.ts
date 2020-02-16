import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "src/app/views/header/header.component";
import { HomepageComponent } from './views/homepage/homepage.component';
import { AllPostsComponent } from './views/homepage/all-posts/all-posts.component';
import { PopularPostsComponent } from './views/homepage/popular-posts/popular-posts.component';
import { PostPreviewComponent } from './views/homepage/post-preview/post-preview.component';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomepageComponent, AllPostsComponent, PopularPostsComponent, PostPreviewComponent],
  imports: [BrowserModule, AppRoutingModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
