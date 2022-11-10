import {Injectable} from '@angular/core';
import {
  YoutubeService,
  YOUTUBE_API_KEY,
  YOUTUBE_API_ULR
} from './youtube.service';
export const youtubeSearchInjectables: Array<any> = [
  {provide: YoutubeService, useClass: YoutubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_ULR, useValue: YOUTUBE_API_ULR}

];
@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {

  constructor() { }
}
