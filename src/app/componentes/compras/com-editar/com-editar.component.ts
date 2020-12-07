import { Component, OnInit } from '@angular/core';
import { detcompra } from '../../../modelo/detcompra';
import { producto } from '../../../modelo/producto';
import { ApiComprasService } from '../../../servicios/api-compras.service';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-com-editar',
  templateUrl: './com-editar.component.html',
  styleUrls: ['./com-editar.component.css']
})
export class ComEditarComponent implements OnInit {

  modelo: detcompra;
  promodelo: producto[];
 

  constructor(
    private _api:ApiComprasService,
    private api2: ApiProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GET();
    this.cargarCombo();
  
  }
  GET(){
    this._route.params.forEach((params : Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo =response.modelo;
      })
    });
  }
  cargarCombo(){
    this.api2.Get().subscribe(response =>{
      this.promodelo = response.modelo;
    });
  }
  onSumit(){
    if(this.modelo.cantidad && this.modelo.total && this.modelo.nombrepro && this.modelo.precio){
      this._api.Patch(this.modelo._id, this.modelo).subscribe(response => {
        this._router.navigate(['/compras']);
        Swal.fire({
          position: 'top-end',
          icon:'success',
          title: 'Se Actualizo Exitosamente',
          showConfirmButton: false,
          timer: 1500})
      });
    }else {

    }
  }


}
