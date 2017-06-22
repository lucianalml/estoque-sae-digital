import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProdutoListComponent } from './components/produtos/produto-list/produto-list.component';
import { ProdutoNewComponent } from './components/produtos/produto-new/produto-new.component';

import { CompraListComponent } from './components/compras/compra-list/compra-list.component';
import { CompraNewComponent } from './components/compras/compra-new/compra-new.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'produtos', component: ProdutoListComponent },
        { path: 'produtos/new', component: ProdutoNewComponent },
        { path: 'compras', component: CompraListComponent },
        { path: 'compras/new', component: CompraNewComponent },
    ] },
];

export const routing = RouterModule.forRoot(routes);