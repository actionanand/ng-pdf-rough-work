import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InbuiltPdfViewerComponent } from './inbuilt-pdf-viewer/inbuilt-pdf-viewer.component';
import { NpmPdfViewerComponent } from './npm-pdf-viewer/npm-pdf-viewer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inbuilt-pdf', component: InbuiltPdfViewerComponent },
  { path: 'custom-pdf', component: NpmPdfViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
