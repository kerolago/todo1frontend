import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../modelo/categoria';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-edicion',
  templateUrl: './cate-edicion.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
  providers: [ApiCategoriaService]
})
export class CateEdicionComponent implements OnInit {

  modelo: categoria;
 

  constructor(
    private _api:ApiCategoriaService,
    
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.GET();
  
  }
  GET(){
    this._route.params.forEach((params : Params) => {
      let id = params['id'];

      this._api.GetId(id).subscribe(response => {
        this.modelo =response.modelo;
      })
    });
  }
 
  onSubmit(){
    if(this.modelo.nombre){
      this._api.Patch(this.modelo._id, this.modelo).subscribe(response => {
        this._router.navigate(['/categoria']);
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
