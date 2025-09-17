import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // 1. Importe o NgForm
import { IonicModule, NavController, LoadingController } from '@ionic/angular'; 
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.page.html',
  styleUrls: ['./cadastro-candidato.page.scss'],
  standalone: true, 
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, 
    RouterModule
  ]
})
export class CadastroCandidatoPage implements OnInit {

  // Objeto para armazenar os dados do formulário
  dadosForm = {
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    senha: '',
    confirmarSenha: ''
  };

  showPassword = false;
  passwordIcon = 'eye-off-outline';

  constructor(
    private navCtrl: NavController,
    private authService: AuthService, // 4. Injete o AuthService
    private loadingCtrl: LoadingController // Para mostrar um indicador de "carregando"
  ) { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordIcon = this.showPassword ? 'eye-outline' : 'eye-off-outline';
  }

  /**
   * Função chamada pelo (ngSubmit) do formulário
   */
  async registrar() {
    // 1. Validação simples
    if (this.dadosForm.senha !== this.dadosForm.confirmarSenha) {
      console.error("As senhas não coincidem!");
      // (Você pode adicionar um AlertController aqui para avisar o usuário)
      return;
    }

    // 2. Mostrar o "carregando"
    const loading = await this.loadingCtrl.create({
      message: 'Criando conta...',
    });
    await loading.present();

    // 3. Chamar o serviço de Auth
    try {
      // Passamos todos os dados do formulário para o serviço
      await this.authService.registrarCandidato(this.dadosForm);
      
      await loading.dismiss(); // Esconde o "carregando"
      
      // Sucesso! Navega o usuário (talvez para o perfil ou login)
      this.navCtrl.navigateRoot('/home'); // Ou '/perfil-candidato' se existir

    } catch(error) {
      await loading.dismiss();
      console.error("Erro no registro pela página", error);
      // Mostre um alerta de erro aqui
    }
  }
  
  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}