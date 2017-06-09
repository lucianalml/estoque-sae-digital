import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/produtos/cadastro/cadastro.component';
import { CompraComponent } from './components/produtos/compra/compra.component';
import { ListarComponent } from './components/produtos/listar/listar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'listar', component: ListarComponent }
];

export const routing = RouterModule.forRoot(routes);