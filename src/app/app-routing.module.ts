import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent),
    title: 'Various PDF Works - Homepage',
  },
  {
    path: 'inbuilt-pdf',
    loadComponent: () =>
      import('./pages/inbuilt-pdf-viewer/inbuilt-pdf-viewer.component').then((mod) => mod.InbuiltPdfViewerComponent),
    title: 'Browser PDF viewer',
  },
  {
    path: 'inbuilt-blob',
    loadComponent: () =>
      import('./pages/inbuilt-pdf-blob/inbuilt-pdf-blob.component').then((mod) => mod.InbuiltPdfBlobComponent),
    title: 'Blob fed Browser PDF viewer',
  },
  {
    path: 'custom-pdf',
    loadComponent: () =>
      import('./pages/npm-pdf-viewer/npm-pdf-viewer.component').then((mod) => mod.NpmPdfViewerComponent),
    title: 'NPM PDF viewer using Mozilla\'s Pdf.js',
  },
  {
    path: 'pdfjs',
    loadComponent: () => import('./pages/pdfjs/pdfjs.component').then((mod) => mod.PdfjsComponent),
    title: 'Own PDF viewer using Mozilla\'s Pdf.js',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
