import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelistComponent } from './deletelist.component';

describe('DeletelistComponent', () => {
  let component: DeletelistComponent;
  let fixture: ComponentFixture<DeletelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
