import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitGroupMemberComponent } from './split-group-member.component';

describe('SplitGroupMemberComponent', () => {
  let component: SplitGroupMemberComponent;
  let fixture: ComponentFixture<SplitGroupMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitGroupMemberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitGroupMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
