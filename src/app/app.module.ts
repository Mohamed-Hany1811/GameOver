import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http'
import { GameDetailsComponent } from './components/game-details/game-details.component';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PlatformViewComponent } from './components/platform-view/platform-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { SortViewComponent } from './components/sort-view/sort-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AllComponent,
    PlatformsComponent,
    NavBarComponent,
    CategoriesComponent,
    SortByComponent,
    GameDetailsComponent,
    NotFoundComponent,
    PlatformViewComponent,
    CategoryViewComponent,
    SortViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
