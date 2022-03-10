import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { LarumSagavComponent } from '../larum-sagav/larum-sagav.component';
import { PainelVagasComponent } from '../painel-vagas/painel-vagas.component';


const rotas : Routes = [
  {path: 'mural', component: LarumSagavComponent },

  {path: 'painel', component: PainelVagasComponent },

  {path:'', redirectTo:'/mural', pathMatch:'full'}
  
]



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
