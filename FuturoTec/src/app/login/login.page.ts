import { Component, OnInit } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular'; // Importar NavController
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    RouterModule // Adicionar RouterModule para os links do header
  ]
})
export class LoginPage implements OnInit {

  showPassword = false;
  passwordIcon = 'eye-off-outline';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.passwordIcon = this.showPassword ? 'eye-outline' : 'eye-off-outline';
  }

  fazerLogin() {
    console.log('Tentativa de login');
    // Adicione sua lógica de login aqui
  }

  goToCadastro() {
    // Navega para a página de seleção de cadastro
    this.navCtrl.navigateForward('/cadastro');
  }
}