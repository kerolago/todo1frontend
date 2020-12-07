import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { categoria } from '../../../modelo/categoria';
import { producto } from '../../../modelo/producto';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-adicion',
  templateUrl: './producto-adicion.component.html',
  styleUrls: ['./producto-adicion.component.css']
})
export class ProductoAdicionComponent implements OnInit {

  modelo: producto;
  catemodelo: categoria[];
 

  public filesToUpload: File;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    private _api: ApiProductoService,
    private _apicate: ApiCategoriaService,
   
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.modelo= new producto('','','','','','','','','');
  
  }

  ngOnInit() {
    this.combo1();
   
  }
  combo1(){
    this._apicate.Get().subscribe(response => {
      this.catemodelo = response.modelo;
    })
  }






  fileChangeEvent(event){

  //fileChangeEvent(fileInput: any){
   
    //this.filesToUpload = <Array<File>>fileInput.target.files;
    this.filesToUpload = event.target.files[0];
    console.log(this.filesToUpload);
  }
  pasar(nombre:HTMLInputElement, descripcion:HTMLInputElement, precio: HTMLInputElement,  categoria:HTMLOptionElement){

    this._api.subir(this.filesToUpload , nombre.value , descripcion.value , precio.value,  categoria.value)
    .subscribe(res =>{
      if(!res.error_estado){
        this._router.navigate(['/producto'])
        Swal.fire({
          position: 'top-end',
          icon:'success',
          title:'Se Guardo Exitosamente',
          showConfirmButton: false,
          timer: 1500})
      }
    })
    
   


  }

}
