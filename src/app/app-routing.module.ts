import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/home/home.component').then((mod) => mod.HomeComponent),
    title: 'PDF Rough Work - Home',
  },
  {
    path: 'inbuilt-pdf',
    loadComponent: () =>
      import('./pages/inbuilt-pdf-viewer/inbuilt-pdf-viewer.component').then((mod) => mod.InbuiltPdfViewerComponent),
    title: 'Inbuilt PDF Work',
  },
  {
    path: 'inbuilt-blob',
    loadComponent: () =>
      import('./pages/inbuilt-pdf-blob/inbuilt-pdf-blob.component').then((mod) => mod.InbuiltPdfBlobComponent),
    title: 'Inbuilt Blob PDF Work',
  },
  {
    path: 'custom-pdf',
    loadComponent: () =>
      import('./pages/npm-pdf-viewer/npm-pdf-viewer.component').then((mod) => mod.NpmPdfViewerComponent),
    title: 'Custom PDF Work with NPM',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
