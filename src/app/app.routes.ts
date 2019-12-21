
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./components/list/list.component";


 const ROUTES:Routes = [

  {path: 'lista', component: ListComponent },
  {path: '', pathMatch:'full', redirectTo:'lista'},
  {path: '**', pathMatch:'full', redirectTo:'lista'}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
