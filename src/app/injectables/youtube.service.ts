import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { SearchResult } from '../Models/searchResult';

export const YOUTUBE_API_KEY: string =
  'AIzaSyB4a9xwJpp2Q0UCi8NeXNuzqvpwhmZ66Z0';
export const YOUTUBE_API_ULR: string =
  'https://www.googleapis.com/youtube/v3/search';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_ULR) private apiUlr: string
  ) {}

  search(query: string) {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`,
    ].join('&');

    return this.http.get(this.apiUlr + `?${params}`).pipe(
      map((response: any) => {
        return response.items;
      }),
      map((data) => {
        return data.map(
          (item: {
            id: { videoId: any };
            snippet: {
              description: any;
              thumbnails: { high: any };
              title: any;
            };
          }) => {
            return new SearchResult({
              id: item.id.videoId,
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url,
              title: item.snippet.title,
            });
          }
        );
      })
    );
  }
}
