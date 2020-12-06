import { Component, Input, NgZone, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { user } from '../../../../../modelo/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRegistroService } from '../../../../../servicios/api-registro.service';

@Component({
  selector: 'app-reg-adicion',
  templateUrl: './reg-adicion.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css']
})
export class RegAdicionComponent implements OnInit {

  flat : boolean;
  flat2 : boolean;
  flat3 : boolean;
  modelo: user;

  @Input() model3: any[] = [];
  public term;
  constructor(
    private zone: NgZone,
    private _api: ApiRegistroService,

    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.modelo =  new user( '','','','','','','')
    this.flat= false;
    this.flat2= true;
    this.flat3= true;
    this.term = localStorage.getItem('termino');
  }
  visibilidad(selector, visible) {
    this.flat= true;
    this.flat2= false;
    
    
   }
   visibilidad1(selector, visible) {
    this.flat2= false;
    }
    visibilidad2(selector, visible) {
     this.flat3= false;
     this.flat= false;
   }
 
  ngOnInit() {
  }
  onSubmit(ter){
    if(this.modelo.nombre && this.modelo.userName && this.modelo.email && this.modelo.pw){
   
        ter=  this.term= localStorage.getItem('termino');
       this._api.PostC(this.modelo,ter).subscribe(response =>{
       
         
         if(!response.error_estado){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se Registro Exitosamente',
            showConfirmButton: false,
            timer: 1500})
            localStorage.removeItem('termino');
            this._router.navigate(['/inicio']);
          
         }  
         
 
         
       } );
     }   else if(!this.modelo.nombre && !this.modelo.userName && !this.modelo.email && !this.modelo.pw){

 
      Swal.fire(
        'llene sus datos correctamente!!',
        'Sus datos son necesarios para su Registro.',
        'error'
      )
      }

 
     }


     reloadPage() { // click handler or similar
      this.zone.runOutsideAngular(() => {
          location.reload();
      });
  }

     termino(){
      localStorage.setItem('termino',JSON.stringify('acepto'))
    }


}
