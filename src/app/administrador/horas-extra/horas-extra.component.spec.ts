import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasExtraComponent } from './horas-extra.component';

describe('HorasExtraComponent', () => {
  let component: HorasExtraComponent;
  let fixture: ComponentFixture<HorasExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorasExtraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorasExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
