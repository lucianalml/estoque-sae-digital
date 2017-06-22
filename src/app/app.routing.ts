import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProdutoComponent } from './components/produtos/produto/produto.component';

import { CompraListComponent } from './components/compras/compra-list/compra-list.component';
import { CompraNewComponent } from './components/compras/compra-new/compra-new.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'produtos', component: ProdutoComponent },
        { path: 'compras', component: CompraListComponent },
        { path: 'compras/new', component: CompraNewComponent },
    ] },
];

export const routing = RouterModule.forRoot(routes);