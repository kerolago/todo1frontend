import { Component, OnInit } from '@angular/core';
import { user } from '../../../modelo/user';
import { ApiDetventaService } from '../../../servicios/api-detventa.service';
import { ApiUsuarioService } from '../../../servicios/api-usuario.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { detventa } from '../../../modelo/detventa';
import { _global } from '../../../servicios/_global';

@Component({
  selector: 'app-ventacliente',
  templateUrl: './ventacliente.component.html',
  styleUrls: ['./ventacliente.component.css']
})
export class VentaclienteComponent implements OnInit {
  modelo: user;
  pedmodelo: detventa ;
  pedido1 ='resivido';
  public identity;
  url: string;
  constructor(
    private _api: ApiDetventaService,
    private _api7:ApiUsuarioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new user('', '','','','','','');
    this. pedmodelo = new detventa('', '','','','','','','','');
    this.identity = this._api7.getIdentity();
    this.url = _global.url;
  }

  ngOnInit(): void {
    this.GET();
    
  }
  GET(){
    this._route.params.forEach((params: Params) => {
     let id = params['id'];

      this._api.Getcli(id).subscribe(response =>{
        console.log(response);
       this.modelo = response.modelo;
      

    })
   });
 }
 

}
