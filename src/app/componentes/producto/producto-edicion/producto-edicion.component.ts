import { Component, OnInit } from '@angular/core';
import { producto } from '../../../modelo/producto';
import { categoria } from '../../../modelo/categoria';
import { FormControl } from '@angular/forms';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { ApiCategoriaService } from '../../../servicios/api-categoria.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { _global } from '../../../servicios/_global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-edicion',
  templateUrl: './producto-edicion.component.html',
  styleUrls: ['./producto-edicion.component.css']
})
export class ProductoEdicionComponent implements OnInit {

  modelo: producto;
  catemodelo: categoria[];
 

  flat : boolean;
  flat2 : boolean;
  flat3 : boolean;
  public filesToUpload: File;
    date = new FormControl(new Date());
   serializedDate = new FormControl((new Date()).toISOString());
   url: string;
 
   constructor(
     private _api: ApiProductoService,
     private _apicate: ApiCategoriaService,
     private  _route: ActivatedRoute,
     private _router: Router
 
   ) { 
     this.url = _global.url;
 
     this.flat= false;
     this.flat2= false;
     this.flat3= true
     this.modelo= new producto('','','','','','','','','');
   }
   visibilidad(selector, visible) {
    this.flat= true;
    
   }
   visibilidad1(selector, visible) {
      this.flat2= true;
    }
    visibilidad2(selector, visible) {
     this.flat3= false;
     this.flat= false;
   }
 
 
   ngOnInit() {
     this.combo1();
   
     this.GET();
   }
   GET(){
     this._route.params.forEach((params : Params) =>{
       let id = params['id'];
 
       this._api.GetId(id).subscribe(response =>{
         this.modelo = response.modelo;
         console.log(this.modelo);       })
     });
   }
   GET2(){
     this._route.params.forEach((params : Params) =>{
       let id = params['id'];
 
       this._api.Deleteed(id).subscribe(response =>{
         this.modelo = response.modelo;
       })
     });
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
  
 
     borrar(){
       Swal.fire({
         title: 'esta seguro de Quitar archivo',
         text: "No podras revertir esto!",
         icon: 'question',
         showCancelButton: true,
         confirmButtonColor: '#d33',
         confirmButtonText: 'Si eliminar',
       }).then((result) =>{
         if(result.value){
           this.delete();
           Swal.fire(
             'Eliminado',
             'Su archivo ha sido Eliminado',
             'success',
           )
         }else {
           
         }
       })
     }
 
     delete(){
     this._api.Delete(this.modelo.nombre1).subscribe(response =>{
       
     });
   }
 

}
