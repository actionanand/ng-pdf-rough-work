import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuiltPdfViewerComponent } from './pages/inbuilt-pdf-viewer/inbuilt-pdf-viewer.component';
import { NpmPdfViewerComponent } from './pages/npm-pdf-viewer/npm-pdf-viewer.component';
import { HomeComponent } from './pages/home/home.component';
import { InbuiltPdfBlobComponent } from './pages/inbuilt-pdf-blob/inbuilt-pdf-blob.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPdfViewerComponent,
    NpmPdfViewerComponent,
    HomeComponent,
    NavBarComponent,
    InbuiltPdfBlobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
