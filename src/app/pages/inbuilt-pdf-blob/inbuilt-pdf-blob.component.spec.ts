import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPdfBlobComponent } from './inbuilt-pdf-blob.component';

describe('InbuiltPdfBlobComponent', () => {
  let component: InbuiltPdfBlobComponent;
  let fixture: ComponentFixture<InbuiltPdfBlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltPdfBlobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbuiltPdfBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
