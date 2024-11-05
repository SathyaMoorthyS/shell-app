import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

 export const routes: Routes = [
  {
    path: 'microFrontEnd1',
    // loadChildren: () => loadRemoteModule({
    //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
    //   remoteName: 'microFrontEnd1',
    //   exposedModule: './Module',
    // }).then(m => m.MFE1Module)
    // .catch(err => {
    //   console.error('Error loading remote module:', err);
    // }),
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'microFrontEnd1',
      exposedModule: './MFE1Module',
    }).then(m => m.MFE1Module)
    .catch(err => {
      console.error('Error loading remote module:', err);
    }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}