import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";
import { Blog } from "src/app/models/db-collections";

@Component({
  selector: "app-all-posts",
  templateUrl: "./all-posts.component.html",
  styleUrls: ["./all-posts.component.scss"]
})
export class AllPostsComponent implements OnInit {
  allBlogsPreview: Blog[];
  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.getAllBlogs().subscribe(blogsPreview => {
      this.allBlogsPreview = blogsPreview;
    });
  }
}
