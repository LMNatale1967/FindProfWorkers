import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ColorPipe } from './pipes/color/color.pipe';
import { IsAvailablePipe } from './pipes/isAvailable/is-available.pipe';
import { IonicModule } from '@ionic/angular';

// ************************
//  Work With Forms
//  - FormsModule
//  - ReactiveFormsModule
// ************************

import { FormComponent } from './form/form.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuantityPipe } from './pipes/quantity/quantity.pipe';
import { HttpClientModule } from '@angular/common/http';

// ***************************
//  Impport The Router Module
// ***************************
import { Route, RouterModule, Routes } from '@angular/router';

// ***********************************
//  Import The Invalid Page Component
// ***********************************
import { InvalidPageComponent } from './invalid-page/invalid-page/invalid-page.component';

// *******************
//  Main PorfilesList 
// *******************
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';

// ***************************************
//  Import the Porfile Details Components
// ***************************************
import { ProfileDetailsComponent } from './components/profiles/profile/profile-details/profile-details.component';
import { ProfileTrainingsComponent } from './components/profiles/profile/profile-trainings/profile-trainings.component';
import { ProfileCompetencesComponent } from './components/profiles/profile/profile-competences/profile-competences.component';
import { ProfileDocumentsComponent } from './components/profiles/profile/profile-documents/profil-documents.component';


// ****************************************
//  Alternate Solution to Implement Routes 
// ****************************************
// const routes: Routes = [
//   {path: 'component-one',  component: Name_Of_The_Component},
//   {path: 'component-two',  component: Name_Of_The_Component},
//   {path: 'component-tree', component: Name_Of_The_Component},
//   {path: 'component-four', component: Name_Of_The_Component},
//   {path: 'component-five', component: Name_Of_The_Component},
// ];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    ColorPipe,                    //  Added By Angualar
    IsAvailablePipe,              //  Added By Angualar
    FormComponent,                //  Added By Angualar        
    FormControlComponent,         //  Added By Angualar        
    ProfileEditorComponent,       //  Added By Angualar        
    NameEditorComponent,          //  Added By Angualar        
    LoginComponent,               //  Added By Angualar        
    QuantityPipe, 
    ProfileDetailsComponent, 
    ProfilesListComponent, 
    ProfileTrainingsComponent,
    ProfileCompetencesComponent, 
    InvalidPageComponent, 
    ProfileDocumentsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,                  // Template-Driven Forms
    ReactiveFormsModule,          // Reactive Forms
    HttpClientModule,             // HttpClientModule

    // *******************************
    //  Implement the Routing Process
    // *******************************
    RouterModule.forRoot([        // RouterModule
      {
        path: '',                 // NOT defined valid Component
        redirectTo: 'login',      // Default Go to Login Page
        pathMatch: 'full'         // Mandatory Parameter
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: []

      },
      {
        path: 'menu',
        component: MenuComponent,
        canActivate: []
      },
      {
        path: 'name-editor',
        component: NameEditorComponent,
        canActivate: []
      },
      {
        path: 'reactive-form',
        component: ProfileEditorComponent,
        canActivate: []
      },
      {
        path: 'app-profiles-list',
        component: ProfilesListComponent,
        canActivate: []
      },
      {
        path: 'app-profile-competences',
        component: ProfileCompetencesComponent,
        canActivate: []
      },
      {
        path: 'app-profile-details',
        component: ProfileDetailsComponent,
        canActivate: []
      },
      {
        path: 'app-profil-documents',
        component: ProfileDocumentsComponent,
        canActivate: []
      },
      // {
      //   path: 'app-profile-empty',
      //   component: ProfileEmptyComponent,
      //   canActivate: []
      // },
      // {
      //   path: 'app-profile-requirements',
      //   component: ProfileRequirementsComponent,
      //   canActivate: []
      // },
      {
        path: 'app-profile-trainings',
        component: ProfileTrainingsComponent,
        canActivate: []
      },
      {
        path: '**',
        component: InvalidPageComponent 
      },
    ])                            
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
