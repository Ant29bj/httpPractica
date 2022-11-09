import {Injectable} from '@angular/core';

import {
  YoutubeService,
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL
} from './youtube.service';

export const youtubeSearchInjectable: Array<any> = [
  {provide: YoutubeService, useClass: YoutubeService}, 
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY}
];

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor() { }
}
