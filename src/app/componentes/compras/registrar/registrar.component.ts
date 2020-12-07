import { Component, OnInit, Input } from '@angular/core';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { _global } from '../../../servicios/_global';
import { producto } from '../../../modelo/producto';
import Swal from 'sweetalert2';
import { detcompra } from '../../../modelo/detcompra';
import { ApiComprasService } from '../../../servicios/api-compras.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
})
export class RegistrarComponent implements OnInit {

  modelo: detcompra; 

  promodelo: producto[];
  constructor(
    private _api: ApiComprasService,
    private api2: ApiProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new detcompra('','','','','','','','');
   }

  ngOnInit() {
    this.cargarCombo();
  }

  cargarCombo(){
    this.api2.Get().subscribe(response =>{
      this.promodelo = response.modelo;
    });
  }
  onSumit(){
    if(this.modelo.cantidad && this.modelo.total && this.modelo.nombrepro && this.modelo.precio ){
      this._api.Post(this.modelo).subscribe(response =>{
        if(!response.error_estado){
          this._router.navigate(['/compras']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Guardo Exitosamente',
            showConfirmButton: false,
            timer: 1500})
        } else {

        }
      });
    }else{
      
    }
  }
}
