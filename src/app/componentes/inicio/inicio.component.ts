import { Component, OnInit, Input } from '@angular/core';
import { ApiProductoService } from '../../servicios/api-producto.service';
import { _global } from '../../servicios/_global';
import { ApiUsuarioService } from '../../servicios/api-usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../../estilos/portal-inicio.css'],
})
export class InicioComponent implements OnInit {
  loading:boolean;
  loa:boolean;
  url: string;
  public identity;
  @Input() modelos: any[] = [];
  @Input() modelos1: any[] = [];
  constructor(
    private _api: ApiProductoService,
    private _api7:ApiUsuarioService,
  ) { 
    this.url = _global.url;
    this.identity = this._api7.getIdentity();
  }

  ngOnInit() {
  }


  buscar(termino:string){
  
  
   
    this.loading = true;
    this.loa = true;
    this._api.Get1(termino)
    .subscribe(response =>{
     
     
      this.modelos = response.modelo;
      this.loading = false;
      this.loa = true;
      console.log(response);
    },
    error=>{
      console.log(<any> error);
    });

    this.loa=false;
  }
  
  buscar2(termino:string){
  
  
   
    this.loading = true;
    this.loa = true;
    this._api.Get2(termino)
    .subscribe(response =>{
     
     
      this.modelos1 = response.modelo;
      this.loading = false;
      this.loa = true;
      console.log(response);
    },
    error=>{
      console.log(<any> error);
    });

    this.loa=false;
  }


}
