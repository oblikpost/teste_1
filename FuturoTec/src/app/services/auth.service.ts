import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {

  constructor(
    private auth: Auth,         
    private firestore: Firestore  
  ) { }

  
  async registrarCandidato(dadosCandidato: any) {
    try {
      // 1. Cria o usuário no Firebase Authentication (apenas com email e senha)
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        dadosCandidato.email,
        dadosCandidato.senha
      );

      // Se a criação do usuário funcionou, userCredential.user conterá o usuário
      const user = userCredential.user;

      // 2. Agora, salvamos os dados extras no Firestore
      // Criamos uma referência para um novo documento na coleção 'usuarios' usando o UID do usuário como ID
      const userDocRef = doc(this.firestore, `usuarios/${user.uid}`);

      // 3. Salvamos os dados (sem a senha, que já está segura no Auth)
      await setDoc(userDocRef, {
        uid: user.uid,
        nome: dadosCandidato.nome,
        telefone: dadosCandidato.telefone,
        email: dadosCandidato.email,
        cpf: dadosCandidato.cpf,
        tipo: 'candidato' // Para sabermos que este usuário é um candidato
      });

      return userCredential; // Retorna sucesso

    } catch (e) {
      // Se houver um erro (ex: email já em uso), ele será capturado aqui
      console.error("Erro ao registrar:", e);
      return e; // Retorna o erro para a página
    }
  }

  // Você pode adicionar o login aqui também
  async login(email: string, senha: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, senha);
      return userCredential;
    } catch (e) {
      console.error("Erro no login:", e);
      return e;
    }
  }

  logout() {
    return signOut(this.auth);
  }
}