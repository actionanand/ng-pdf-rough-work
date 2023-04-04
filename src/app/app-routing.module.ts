import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { InbuiltPdfBlobComponent } from './pages/inbuilt-pdf-blob/inbuilt-pdf-blob.component';
import { InbuiltPdfViewerComponent } from './pages/inbuilt-pdf-viewer/inbuilt-pdf-viewer.component';
import { NpmPdfViewerComponent } from './pages/npm-pdf-viewer/npm-pdf-viewer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'inbuilt-pdf', component: InbuiltPdfViewerComponent },
  { path: 'inbuilt-blob', component: InbuiltPdfBlobComponent},
  { path: 'custom-pdf', component: NpmPdfViewerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
