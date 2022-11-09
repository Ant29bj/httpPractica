import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { debounceTime, filter, map, switchAll, throttleTime } from 'rxjs';
import { YoutubeService } from '../Injectables/youtube.service';
import { SearchResult } from '../Models/searchResult';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();
  constructor(private youtube: YoutubeService, private el: ElementRef) {}

  ngOnInit(): void {
    const subscritption = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(throttleTime(1000))
      .subscribe(() => console.log('keyup'));

    const xyz = fromEvent<any>(this.el.nativeElement, 'keyup')
      .pipe(
        map((e) => e.target.value),
        filter((value) => (value as string).length > 1),
        debounceTime(250),
        map((value: string) => {
          this.loading.emit(true);
          return this.youtube.search(value);
          ``;
        }),
        switchAll()
      )
      .subscribe(
        next => {
          this.loading.emit(false);
          this.results.emit(next);
        },
        error => {
          console.error(error);
          this.loading.emit(false);
        },
        () => {
          this.loading.emit(true);
        }
      );
  }
}
