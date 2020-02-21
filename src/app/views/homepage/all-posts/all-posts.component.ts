import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-all-posts",
  templateUrl: "./all-posts.component.html",
  styleUrls: ["./all-posts.component.scss"]
})
export class AllPostsComponent implements OnInit {
  Responses: any = [
    {
      header:
        "12 Things About The South I Didn’t Know Until Moving To The South",
      subHeader: "#1: They don’t speak sarcasm",
      Date: "03 Sept 2019"
    },
    {
      header:
        "12 Things About The South I Didn’t Know Until Moving To The South",
      subHeader: "#1: They don’t speak sarcasm",
      Date: "03 Sept 2019"
    },
    {
      header:
        "12 Things About The South I Didn’t Know Until Moving To The South",
      subHeader: "#1: They don’t speak sarcasm",
      Date: "03 Sept 2019"
    }
  ];
  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.getAllBlogs().subscribe(blogs => {
      console.log(blogs);
    });
  }
}
