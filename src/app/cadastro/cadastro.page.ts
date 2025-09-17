import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CadastroPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}


  irParaCadastroCandidato() {
    console.log('Navegar para cadastro de candidato');
    this.navCtrl.navigateForward('/cadastro-candidato');
  }

  irParaCadastroEmpresa() {
    console.log('Navegar para cadastro de empresa');

    this.navCtrl.navigateForward('/cadastro-empresa');
  }
}
