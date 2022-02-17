import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleLinksComponent } from './bubble-links.component';

describe('BubbleLinksComponent', () => {
  let component: BubbleLinksComponent;
  let fixture: ComponentFixture<BubbleLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
