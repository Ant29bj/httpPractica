import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../Models/searchResult';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {
  
  results: SearchResult[] | undefined;
  loading: boolean | undefined;
  constructor() {}

  updateResults(results: SearchResult[]): void{
    this.results = results;
  }

  ngOnInit(): void {
  }

}
