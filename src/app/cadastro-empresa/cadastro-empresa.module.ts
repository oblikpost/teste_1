import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroEmpresaPageRoutingModule } from './cadastro-empresa-routing.module';

import { CadastroEmpresaPage } from './cadastro-empresa.page'; // 1. Importe a Página

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroEmpresaPageRoutingModule,
    CadastroEmpresaPage // 2. Importe o componente Standalone aqui
  ],
  declarations: [] // 3. O declarations deve ficar vazio
})
export class CadastroEmpresaPageModule {}