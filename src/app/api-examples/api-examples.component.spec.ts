import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiExamplesComponent } from './api-examples.component';

describe('ApiExamplesComponent', () => {
  let component: ApiExamplesComponent;
  let fixture: ComponentFixture<ApiExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiExamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
