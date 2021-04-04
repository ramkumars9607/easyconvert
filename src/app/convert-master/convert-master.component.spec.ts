import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertMasterComponent } from './convert-master.component';

describe('ConvertMasterComponent', () => {
  let component: ConvertMasterComponent;
  let fixture: ComponentFixture<ConvertMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
