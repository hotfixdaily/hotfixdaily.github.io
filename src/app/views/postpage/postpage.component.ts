import { Component, OnInit, AfterViewInit } from "@angular/core";

import { PostPageService } from "src/app/services/post-page.service";
@Component({
  selector: "app-postpage",
  templateUrl: "./postpage.component.html",
  styleUrls: ["./postpage.component.css"]
})
export class PostpageComponent implements OnInit, AfterViewInit {
  postJson = {};

  constructor(private postPageService: PostPageService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.postPageService
      .getPost("https://hotfixdailyblogs.s3.amazonaws.com/blog_post.json")
      .then(json => {
        this.postJson = json;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
