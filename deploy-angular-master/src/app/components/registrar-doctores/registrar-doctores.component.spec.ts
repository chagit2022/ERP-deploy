import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDoctoresComponent } from './registrar-doctores.component';

describe('RegistrarDoctoresComponent', () => {
  let component: RegistrarDoctoresComponent;
  let fixture: ComponentFixture<RegistrarDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarDoctoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
