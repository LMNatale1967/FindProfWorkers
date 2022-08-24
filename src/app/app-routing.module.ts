
import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

/**
 * In this file we set up the main routes within our application
 * We have multiple options available to us for routing
 * 
 * Route to a specific component
 * Route to a lazy-loaded module
 * Redirect to a predefined route 
 * 
 * We can see an example of each below
 */

const routes: Routes = [
  // {
  //  path: '',
  //  redirectTo: 'login',
  //  component: LoginComponent      
  // },
  // {
  //   path: 'login',
  //   redirectTo: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'main',
  //   redirectTo: 'main',
  //   component: MainComponent
  // },
  // {
  //   path: 'menu',
  //   redirectTo: 'menu',
  //   component: MenuComponent
  // },
  // {
  //   path: 'name-editor',
  //   redirectTo: 'name-editor',
  //   component: NameEditorComponent
  // },
  // {
  //   path: 'reactive-form',
  //   redirectTo: 'reactive-form',
  //   component: ProfileEditorComponent
  // }    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  
  exports: [RouterModule]
})

export class AppRoutingModule { }
