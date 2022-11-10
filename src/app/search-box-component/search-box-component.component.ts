import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, filter, fromEvent, map, switchAll } from 'rxjs';
import { YoutubeService } from '../injectables/youtube.service';
import { SearchResult } from '../Models/searchResult';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css'],
})
export class SearchBoxComponentComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();
  constructor(private youtube: YoutubeService, private el: ElementRef) {}

  ngOnInit(): void {
    const xyz = fromEvent<any>(this.el.nativeElement, 'keyup')
      .pipe(
        map((e) => e.target.value),
        filter((value) => (value as string).length > 1),
        debounceTime(250),
        map((value: string) => {
          this.loading.emit(true);
          return this.youtube.search(value);
        }),
        switchAll()
      )
      .subscribe(
        next => {
          this.loading.emit(false);
          this.results.emit(next);
        },
        error => {
          console.log(error);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(true);
        }
      );
  }
}
