import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncapacidadesComponent } from './incapacidades.component';

describe('IncapacidadesComponent', () => {
  let component: IncapacidadesComponent;
  let fixture: ComponentFixture<IncapacidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncapacidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncapacidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
