import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  
  // --- ADICIONE ESTAS ROTAS QUE FALTAM ---
  {
    // Rota para a página de candidato que acabamos de criar
    path: 'cadastro-candidato', 
    loadChildren: () => import('./cadastro-candidato/cadastro-candidato.module').then( m => m.CadastroCandidatoPageModule)
  },
  {
    path: 'cadastro-empresa',
    loadChildren: () => import('./cadastro-empresa/cadastro-empresa.module').then( m => m.CadastroEmpresaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }