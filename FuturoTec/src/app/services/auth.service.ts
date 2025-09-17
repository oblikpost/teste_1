import { Injectable, NgZone } from '@angular/core'; 


import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {

  constructor(
    private auth: Auth,         
    private firestore: Firestore,
    private zone: NgZone, 
  ) { }

  
 
  async registrarCandidato(dadosCandidato: any) {
    try {

      const userCredential = await this.zone.run(() => 
        createUserWithEmailAndPassword(
          this.auth,
          dadosCandidato.email,
          dadosCandidato.senha
        )
      );

      const user = userCredential.user;
      
    
      const userDocRef = doc(this.firestore, `usuarios/${user.uid}`);

      await this.zone.run(() => 
        setDoc(userDocRef, {
          uid: user.uid,
          nome: dadosCandidato.nome,
          telefone: dadosCandidato.telefone,
          email: dadosCandidato.email,
          cpf: dadosCandidato.cpf,
          tipo: 'candidato' 
        })
      );

      return userCredential;

    } catch (e) {
   
      console.error("Erro ao registrar:", e);
      return e; 
    }
  }


  
  async login(email: string, senha: string) {
    try {
      
      const userCredential = await this.zone.run(() => 
        signInWithEmailAndPassword(this.auth, email, senha)
      );

      return userCredential; 

    } catch (e) {
      console.error("Erro no login:", e);
      return e; 
    }
  }

  
  logout() {
    
    return this.zone.run(() => signOut(this.auth));
  }
  
} 