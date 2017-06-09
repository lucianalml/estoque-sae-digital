import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraNewComponent } from './compra-new.component';

describe('CompraNewComponent', () => {
  let component: CompraNewComponent;
  let fixture: ComponentFixture<CompraNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
