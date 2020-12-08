import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../modelo/categoria';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-eliminar',
  templateUrl: './cate-eliminar.component.html',
  styleUrls: ['./cate-eliminar.component.css']
})
export class CateEliminarComponent implements OnInit {

  modelo: categoria;
  public api10: ApiCategoriaService;

  constructor(
    private _api: ApiCategoriaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GET();
  }
  GET(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo = response.modelo;
      });
    });
  }

  borrar(){
    Swal.fire({
      title: 'Esta Seguro',
      text: "No podras revertir esto!",
      icon:'question',
      showCancelButton: true,
      confirmButtonColor:'#d33',
      confirmButtonText: 'Si, Eliminar',
    }).then((result) => {
      if(result.value){
        this.onSubmit();
        Swal.fire(
          'Eliminado',
          'Su archivo ha sido Eliminado',
          'success'
        )
        }else {
          this._router.navigate(['/categoria']);
      }
    })
  }
  onSubmit(){
    this._api.Delete(this.modelo._id).subscribe(response => {
      this._router.navigate(['/catalogo']);
    });
  }

}
