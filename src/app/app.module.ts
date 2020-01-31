import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Route,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { SplashComponent } from './splash/splash.component';
import { ContainerComponent } from './container/container.component';

const routes:Route[] = [
{path:'',redirectTo:'splash',pathMatch:'full'},
{path:'splash',component:SplashComponent},
{path:'app',component:AppComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, SplashComponent, ContainerComponent ],
  bootstrap:    [ ContainerComponent ]
})
export class AppModule { }
