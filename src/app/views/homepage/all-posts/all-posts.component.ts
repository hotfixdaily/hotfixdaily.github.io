import { Component, OnInit } from "@angular/core";
import { FetchDataService } from "src/app/services/fetch-data.service";

@Component({
  selector: "app-all-posts",
  templateUrl: "./all-posts.component.html",
  styleUrls: ["./all-posts.component.scss"]
})
export class AllPostsComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.getAllBlogs().subscribe(blogs => {
      console.log(blogs);
    });
  }
}
