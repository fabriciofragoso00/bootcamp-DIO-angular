import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenuTitleComponent } from './nenu-title.component';

describe('NenuTitleComponent', () => {
  let component: NenuTitleComponent;
  let fixture: ComponentFixture<NenuTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NenuTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenuTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
