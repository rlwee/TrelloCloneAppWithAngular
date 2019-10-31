import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardinviteComponent } from './boardinvite.component';

describe('BoardinviteComponent', () => {
  let component: BoardinviteComponent;
  let fixture: ComponentFixture<BoardinviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardinviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
