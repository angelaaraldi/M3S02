import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharAutomovelComponent } from './detalhar-automovel.component';

describe('DetalharAutomovelComponent', () => {
  let component: DetalharAutomovelComponent;
  let fixture: ComponentFixture<DetalharAutomovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharAutomovelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalharAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
