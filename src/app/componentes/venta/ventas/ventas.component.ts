import { Component, OnInit } from '@angular/core';
import { detventa } from '../../../modelo/detventa';
import { ApiDetventaService } from '../../../servicios/api-detventa.service';
import { ApiUsuarioService } from '../../../servicios/api-usuario.service';
import { _global } from '../../../servicios/_global';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
modelo: detventa[];
public identity;
url: string;
  constructor(
    private _Api: ApiDetventaService,
    private _api7:ApiUsuarioService,
  ) { 
    this.identity = this._api7.getIdentity();
    this.url = _global.url;
  }

  ngOnInit() {
    this._Api.Get().subscribe(response => {
      this.modelo = response.modelo;
     console.log(this.modelo);
    },
    error => {
      console.log(<any>error);
    });
  }



  }


