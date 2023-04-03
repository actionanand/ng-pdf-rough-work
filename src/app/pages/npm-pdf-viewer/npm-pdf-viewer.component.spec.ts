import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmPdfViewerComponent } from './npm-pdf-viewer.component';

describe('NpmPdfViewerComponent', () => {
  let component: NpmPdfViewerComponent;
  let fixture: ComponentFixture<NpmPdfViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmPdfViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpmPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
