import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { ProdutoComponent } from './components/produtos/produto/produto.component';
import { ProdutoListComponent } from './components/produtos/produto-list/produto-list.component';
import { ProdutoNewComponent } from './components/produtos/produto-new/produto-new.component';

import { CompraListComponent } from './components/compras/compra-list/compra-list.component';
import { CompraNewComponent } from './components/compras/compra-new/compra-new.component';

import { ProdutoService } from './services/produto.service';
import { CompraService } from './services/compra.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoListComponent,
    ProdutoNewComponent,
    CompraListComponent,
    CompraNewComponent,
    ProdutoNewComponent,
    ProdutoListComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NoopAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    routing
  ],
  providers: [
    ProdutoService,
    CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
