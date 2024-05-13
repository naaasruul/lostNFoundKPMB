import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path:'tabs',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'report-lost',
        loadChildren: () => import('./report-lost/report-lost.module').then( m => m.ReportLostPageModule)
      },
      {
        path: 'item-details/:itemId',
        loadChildren: () => import('./item-details/item-details.module').then( m => m.ItemDetailsPageModule)
      },
    ]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: '',
    redirectTo: 'lnf-login',
    pathMatch: 'full'
  },
  {
    path: 'lnf-login',
    loadChildren: () => import('./lnf-login/lnf-login.module').then( m => m.LnfLoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
