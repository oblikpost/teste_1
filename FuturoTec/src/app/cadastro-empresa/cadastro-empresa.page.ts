import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-cadastro-empresa',
  // --- AQUI ESTÁ A CORREÇÃO ---
  templateUrl: './cadastro-empresa.page.html', // Corrigido
  styleUrls: ['./cadastro-empresa.page.scss'],   // Corrigido
  // -----------------------------
  standalone: true, 
  imports: [ 
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule 
  ]
})
export class CadastroEmpresaPage implements OnInit {

  // Lógica para o toggle de senha
  showPassword = false;
  passwordIcon = 'eye-off-outline';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordIcon = 'eye-outline';
    } else {
      this.passwordIcon = 'eye-off-outline';
    }
  }

  registrarEmpresa() {
    console.log('Formulário de Empresa enviado');
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

}