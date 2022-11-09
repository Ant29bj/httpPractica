import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchResult} from '../Models/searchResult';
import {map, Observable} from 'rxjs';

export const YOUTUBE_API_KEY: string = "AIzaSyAkBd4tnxe0dU1ufDmQ6A-8KyBIi_czeFc";
export const YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  xyz!: SearchResult[];
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]>{
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    
    const queryUrl = `${this.apiUrl}?${params}`;
    
    return this.http.get<SearchResult[]>(queryUrl)
      .pipe(
        map(data => {
          return data.map((item) => {
            return new SearchResult({
              id: item.id,
              title: item.title,
              description: item.description,
              thumbnailUrl: item.thumbUrl
            });
          });
        }),
      );

  }
}
