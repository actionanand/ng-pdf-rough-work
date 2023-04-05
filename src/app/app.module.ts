import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuiltPdfViewerComponent } from './pages/inbuilt-pdf-viewer/inbuilt-pdf-viewer.component';
import { NpmPdfViewerComponent } from './pages/npm-pdf-viewer/npm-pdf-viewer.component';
import { HomeComponent } from './pages/home/home.component';
import { InbuiltPdfBlobComponent } from './pages/inbuilt-pdf-blob/inbuilt-pdf-blob.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { PdfBlobPipe } from './shared/pipes/pdf-blob.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPdfViewerComponent,
    NpmPdfViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfJsViewerModule,
    PdfBlobPipe,
    SafePipe,
    SpinnerComponent,
    NavBarComponent,
    HomeComponent,
    InbuiltPdfBlobComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
