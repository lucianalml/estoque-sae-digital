import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ProdutoComponent } from './components/produtos/produto/produto.component';

import { CompraComponent } from './components/compras/compra/compra.component';

const routes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'produtos', component: ProdutoComponent },
        { path: 'compras', component: CompraComponent }
    ] },
];

export const routing = RouterModule.forRoot(routes);