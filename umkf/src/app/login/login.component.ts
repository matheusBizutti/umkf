import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ThfPageLogin, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  customLiterals: ThfPageLoginLiterals = {
    title: 'Seja bem-vindo ao Portal U.M.K.F',
    loginErrorPattern: 'Login obrigatório',
    loginPlaceholder: 'Insira seu usuário de acesso',
    passwordErrorPattern: 'Senha obrigatória',
    passwordPlaceholder: 'Insira sua senha de acesso',
    rememberUser: 'Lembrar usuário',
    submitLabel: 'Entrar',
    registerUrl: 'Novo cadastro',
    forgotPassword: 'Esqueceu sua senha?',
    highlightInfo: 'Aqui fica uma frase de impacto.'
  };

  private readonly literals: ThfPageLoginLiterals = {
    title: 'Seja bem-vindo ao Portal Mingle',
    submitLabel: 'Entrar no Portal Mingle',
    highlightInfo: 'Mingle é uma plataforma para a sustentação de aplicações com soluções de: Autenticação, API Gateway e Métricas.'
  };

  private subscription: Subscription;

  constructor(private router: Router,
              private thfNotification: ThfNotificationService) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  signIn(formData: ThfPageLogin) {

    localStorage.setItem('token', 'tokenaccess');
    this.router.navigate(['/students']);

  }

}
