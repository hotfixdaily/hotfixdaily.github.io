import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HighlightResult } from "ngx-highlightjs";

import { PostPageService } from "src/app/services/post-page.service";
@Component({
  selector: "app-postpage",
  templateUrl: "./postpage.component.html",
  styleUrls: ["./postpage.component.scss"]
})
export class PostpageComponent implements OnInit, AfterViewInit {
  postJson = {};

  highlightResult: HighlightResult;

  constructor(private postPageService: PostPageService) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.postPageService
      .getPost("https://hotfixdailyblogs.s3.amazonaws.com/blog_post.json")
      .then(json => {
        this.postJson = json;
        debugger;
      })
      .catch(err => {
        console.log(err);
      });
  }

  onHighlight(e) {
    this.highlightResult = {
      language: e.language,
      relevance: e.relevance,
      second_best: "{...}",
      top: "{...}",
      value: "{...}"
    };
  }
}
