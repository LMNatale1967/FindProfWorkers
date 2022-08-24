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
import { ProfilesListComponent } from './components/profiles-list/profiles-list.component';
import { HttpClientModule } from '@angular/common/http';

// ***************************
//  Impport The Router Module
// ***************************
import { RouterModule } from '@angular/router';
import { InvalidPageComponent } from './invalid-page/invalid-page/invalid-page.component';

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
    ProfilesListComponent, InvalidPageComponent,        //  Added By Angualar        
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,                  // Template-Driven Forms
    ReactiveFormsModule,          // Reactive Forms
    HttpClientModule,             // HttpClientModule
    RouterModule.forRoot([        // RouterModule
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'name-editor',
        component: NameEditorComponent
      },
      {
        path: 'reactive-form',
        component: ProfileEditorComponent
      },
      {
        path: '**',
        component: InvalidPageComponent 
      }
    ])                            
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
