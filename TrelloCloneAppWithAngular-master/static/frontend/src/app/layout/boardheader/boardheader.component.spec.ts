import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardheaderComponent } from './boardheader.component';

describe('BoardheaderComponent', () => {
  let component: BoardheaderComponent;
  let fixture: ComponentFixture<BoardheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
