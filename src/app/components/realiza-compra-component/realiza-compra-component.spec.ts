import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizaCompraComponent } from './realiza-compra-component';

describe('RealizaCompraComponent', () => {
  let component: RealizaCompraComponent;
  let fixture: ComponentFixture<RealizaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizaCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
