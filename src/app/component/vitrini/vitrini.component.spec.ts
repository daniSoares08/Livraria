import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitriniComponent } from './vitrini.component';

describe('VitriniComponent', () => {
  let component: VitriniComponent;
  let fixture: ComponentFixture<VitriniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitriniComponent]
    });
    fixture = TestBed.createComponent(VitriniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
