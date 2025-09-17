import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CadastroCandidatoPageRoutingModule } from './cadastro-candidato-routing.module';

import { CadastroCandidatoPage } from './cadastro-candidato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCandidatoPageRoutingModule,
    CadastroCandidatoPage,
  ],
})
export class CadastroCandidatoPageModule {}
