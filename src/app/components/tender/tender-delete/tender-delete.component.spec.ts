import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderDeleteComponent } from './tender-delete.component';

describe('TenderDeleteComponent', () => {
  let component: TenderDeleteComponent;
  let fixture: ComponentFixture<TenderDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
