import { NgModule } from '@angular/core';
import { Title, platformBrowser } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AllComponent } from './components/all/all.component';
import { PlatformsComponent } from './components/platforms/platforms.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GrdGuard } from './guards/grd.guard';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { SortViewComponent } from './components/sort-view/sort-view.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { PlatformViewComponent } from './components/platform-view/platform-view.component';
import { CategoriesComponent } from './components/categories/categories.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full' },
  {path:'home',canActivate:[GrdGuard] ,component:HomeComponent },
  {path:'all',canActivate:[GrdGuard] , component:AllComponent },
  {path:'login', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'sort-by',canActivate:[GrdGuard] , component:SortByComponent, children:[
    {path:'sort-view/:specs', canActivate:[GrdGuard] ,component:SortViewComponent},
  ]},
  {path:'platforms', canActivate:[GrdGuard] ,component:PlatformsComponent, children:[
    {path:'platform-view/:name', canActivate:[GrdGuard] ,component:PlatformViewComponent},
  ]},
  {path:'categories',canActivate:[GrdGuard] , component:CategoriesComponent, children:[
    {path:'category/:cat', canActivate:[GrdGuard] ,component:CategoryViewComponent},
  ] },
  {path:'game-details/:id', canActivate:[GrdGuard] ,component:GameDetailsComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
