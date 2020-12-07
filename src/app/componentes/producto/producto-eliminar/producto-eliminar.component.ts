import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { producto } from '../../../modelo/producto';

@Component({
  selector: 'app-producto-eliminar',
  templateUrl: './producto-eliminar.component.html',
  styleUrls: ['./producto-eliminar.component.css']
})
export class ProductoEliminarComponent implements OnInit {

  modelo: producto;

  constructor(
    private _api: ApiProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GET();
  }
  GET(){
    this._route.params.forEach((params : Params) =>{
     let id = params['id']

     this._api.GetEli(id).subscribe(response =>{
       this.modelo = response.modelo;
     });
    });
  }

  borrar(){
    Swal.fire({
      title: 'esta seguro',
      text: "No podras revertir esto!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Si eliminar',
    }).then((result) =>{
      if(result.value){
        this.onSubmit();
        Swal.fire(
          'Eliminado',
          'Su archivo ha sido Eliminado',
          'success',
        )
      }else {
        this._router.navigate(['/producto']);
      }
    })
  }
  

  onSubmit(){
    this._api.Delete(this.modelo.nombre1).subscribe(response =>{
      this._router.navigate(['/producto']);
    });
  }

}
