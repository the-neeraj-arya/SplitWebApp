import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitGroupComponent } from './split-group.component';

describe('SplitGroupComponent', () => {
  let component: SplitGroupComponent;
  let fixture: ComponentFixture<SplitGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
