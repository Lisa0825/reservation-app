import {BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
    declarations:[
        AppComponent,
        NavbarComponent,
    ],
    imports:[
        BrowserModule,
        AppRoutingModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}