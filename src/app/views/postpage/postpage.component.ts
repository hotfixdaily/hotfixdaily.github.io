import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HighlightResult } from "ngx-highlightjs";

import { PostPageService } from "src/app/services/post-page.service";
import { FetchDataService } from "src/app/services/fetch-data.service";
import { Blog } from "src/app/models/db-collections";
@Component({
  selector: "app-postpage",
  templateUrl: "./postpage.component.html",
  styleUrls: ["./postpage.component.scss"]
})
export class PostpageComponent implements OnInit, AfterViewInit {
  postJson: any = null;
  postData: Blog;

  highlightResult: HighlightResult;

  constructor(
    private postPageService: PostPageService,
    private router: ActivatedRoute,
    private fetchDataService: FetchDataService
  ) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.router.params.subscribe(params => {
      const postQueryParams = params["id"];
      const status = this.fetchDataService.getBlogDetailsByQuery(
        postQueryParams
      );
      status
        .then(postData => {
          this.postData = postData;
          this.postPageService
            .getPost(this.postData.jsonUrl)
            .then(json => {
              this.postJson = json;
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(error => {});
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
