import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";
import { Blog } from "src/app/models/db-collections";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-preview",
  templateUrl: "./post-preview.component.html",
  styleUrls: ["./post-preview.component.scss"]
})
export class PostPreviewComponent implements OnInit, AfterViewInit {
  @Input() blogData: Blog;
  @ViewChild("previewImage", { static: false }) previewImageRef: ElementRef;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.previewImageRef.nativeElement.style.backgroundImage =
      "url('" + this.blogData.introImage + "')";
  }

  openBlogPost() {
    const path = this.blogData.queryParam;
    this.router.navigateByUrl("/blog/" + path);
  }
}
