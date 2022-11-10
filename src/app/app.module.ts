import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {YoutubeService} from './injectables/youtube.service';
import { SearchBoxComponentComponent } from './search-box-component/search-box-component.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import {youtubeSearchInjectables} from './injectables/youtube-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponentComponent,
    SearchResultComponent,
    YoutubeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [YoutubeService,youtubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
