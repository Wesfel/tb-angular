import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LarumSagavComponent } from './larum-sagav/larum-sagav.component';
import { RouterModule } from '@angular/router';
import { PainelVagasComponent } from './painel-vagas/painel-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LarumSagavComponent,
    PainelVagasComponent,
    MenuComponent,
    RodapeComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
    ],
    
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


