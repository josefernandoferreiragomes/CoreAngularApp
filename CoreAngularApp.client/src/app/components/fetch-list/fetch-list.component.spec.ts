import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchListComponent } from './fetch-list.component';

describe('FetchListComponent', () => {
  let component: FetchListComponent;
  let fixture: ComponentFixture<FetchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
