import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../modelo/categoria';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cate-adicion',
  templateUrl: './cate-adicion.component.html',
  styleUrls: ['./cate-adicion.component.css'],
  providers: [ApiCategoriaService]
})
export class CateAdicionComponent implements OnInit {

  modelo: categoria;
 
  public api10: ApiCategoriaService;
  constructor(
    private _api: ApiCategoriaService ,
    
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.modelo = new categoria('','');
  }

  ngOnInit() {
    
  }

  onSubmit(){
    if(this.modelo.nombre ){
      this._api.Post(this.modelo).subscribe(response => {
        if(!response.error_estado){
          this._router.navigate(['/categoria']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Guardo Exitosamente',
            showConfirmButton: false,
            timer: 1500})
        }else {

        }
      });
    }else {

    }
  }
}
