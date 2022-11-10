import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponentComponent } from './search-box-component.component';

describe('SearchBoxComponentComponent', () => {
  let component: SearchBoxComponentComponent;
  let fixture: ComponentFixture<SearchBoxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
