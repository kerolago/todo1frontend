import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './modelo/user';
import { ApiUsuarioService } from './servicios/api-usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  title = 'frontend';

  public identity;
  public token;
  modelo: user;
  public Cliente;
  public ide;
public numero;

  constructor( 
    private _api:ApiUsuarioService,
    private _router: Router
    ){
    this.Cliente;
  }
  ngOnInit(){
    this.identity = this._api.getIdentity();
    this.token = this._api.getToken();
  }
  ngDoCheck(){
    this.identity = this._api.getIdentity();
    this.token = this._api.getToken();
    this.Cliente = localStorage.getItem("client");
    this.numero = localStorage.getItem("numero");
    
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio'])
    localStorage.setItem('numero', JSON.stringify(0));
  }
}
