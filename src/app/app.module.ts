import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from "ngx-highlightjs";
import "highlight.js/styles/github.css";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "src/app/views/header/header.component";
import { HomepageComponent } from "./views/homepage/homepage.component";
import { AllPostsComponent } from "./views/homepage/all-posts/all-posts.component";
import { PopularPostsComponent } from "./views/homepage/popular-posts/popular-posts.component";
import { PostpageComponent } from "./views/postpage/postpage.component";

const appRoutes: Routes = [
  {
    path: "blog",
    component: PostpageComponent
  },
  {
    path: "**",
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    AllPostsComponent,
    PopularPostsComponent,
    PostpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
