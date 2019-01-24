import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfMenuItem, ThfToolbarProfile, ThfToolbarAction } from '@totvs/thf-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter = true;

  items: Array<ThfMenuItem> = [
    { label: 'Alunos', link: '/students', icon: 'thf-icon-user', shortLabel: 'Alunos' },
    { label: 'Produtos', icon: 'thf-icon-gift', link: '/students', shortLabel: 'Prods.' },
    { label: 'Contas a pagar', link: '/students', icon: 'thf-icon-credit-payment', shortLabel: 'Pags' },
    { label: 'Contas a receber', link: '/students', icon: 'thf-icon-credit-payment', shortLabel: 'Recs' }
  ];

  public readonly profile: ThfToolbarProfile = {
    subtitle: 'wilton@3ws.com.br',
    title: 'Wilton Stamboni'
  };

  public readonly profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-exit', label: 'Sair', type: 'danger', separator: true, action: () => this.exit() }
  ];

  constructor(private route: Router) {}

  ngOnInit() {}

  exit() {
    this.route.navigate(['/login']);
  }

}
