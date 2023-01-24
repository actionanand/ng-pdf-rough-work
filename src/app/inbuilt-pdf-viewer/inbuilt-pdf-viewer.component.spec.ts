import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPdfViewerComponent } from './inbuilt-pdf-viewer.component';

describe('InbuiltPdfViewerComponent', () => {
  let component: InbuiltPdfViewerComponent;
  let fixture: ComponentFixture<InbuiltPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbuiltPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
