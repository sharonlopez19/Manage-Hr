import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VacacionesComponent } from './vacaciones.component';

describe('VacacionesComponent', () => {
  let component: VacacionesComponent;
  let fixture: ComponentFixture<VacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display summary data correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.summary li:nth-child(1) span').textContent).toContain('25');
  });
});
