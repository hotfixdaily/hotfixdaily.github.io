import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.css']
})
export class PopularPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Responses:any= [{'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'},
  {'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'},
  {'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'}
];
}
