import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';

import 'hammerjs';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { CadastroComponent } from './components/produtos/cadastro/cadastro.component';
import { CompraComponent } from './components/produtos/compra/compra.component';
import { ListarComponent } from './components/produtos/listar/listar.component';

import { ProdutoService } from './services/produto.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    CompraComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MaterialModule,
    routing
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
