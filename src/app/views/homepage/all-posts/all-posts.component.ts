import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Responses:any= [{'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'},
  {'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'},
  {'header':'12 Things About The South I Didn’t Know Until Moving To The South','subHeader':'#1: They don’t speak sarcasm','Date':'03 Sept 2019'}
];


}