import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [    
      {//Instaciar la página hija inicio
        path:"inicio",
        loadChildren: ()=>import("./inicio/inicio.module").then(vista=>vista.InicioPageModule)
      },
      {//Instaciar la página hija nudo
        path:"nudo",
        loadChildren: ()=>import("./nudo/nudo.module").then(vista=>vista.NudoPageModule)
      },
      {//Instaciar la página hija desenlace
        path:"desenlace",
        loadChildren: ()=>import("./desenlace/desenlace.module").then(vista=>vista.DesenlacePageModule)
      },
      {//Por defeceto abrir inicio
        path:"",
        redirectTo:"inicio",
        pathMatch:"full"
      },
      
    ]
  },
  {//Por defecto abrir padre tabs
    path:"",
    redirectTo:"tabs",
    pathMatch:"full" 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
