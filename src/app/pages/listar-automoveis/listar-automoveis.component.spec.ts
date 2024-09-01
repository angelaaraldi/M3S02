import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAutomoveisComponent } from './listar-automoveis.component';

describe('ListarAutomoveisComponent', () => {
  let component: ListarAutomoveisComponent;
  let fixture: ComponentFixture<ListarAutomoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarAutomoveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarAutomoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
