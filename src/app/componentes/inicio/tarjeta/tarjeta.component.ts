import { Component, OnInit } from '@angular/core';
import { producto } from '../../../modelo/producto';
import { ApiProductoService } from '../../../servicios/api-producto.service';
import { _global } from '../../../servicios/_global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiUsuarioService } from '../../../servicios/api-usuario.service';
import Swal from 'sweetalert2';
import { ApiDetventaService } from '../../../servicios/api-detventa.service';
import { user } from '../../../modelo/user';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['../../../estilos/angular-material.css'],
})
export class TarjetaComponent implements OnInit {
  modelos: producto;
  url: string;
  public nu;
public plu;
public identity;
public n; 
  constructor(
    private _api: ApiProductoService,
    private _api7:ApiUsuarioService,
    private _api2: ApiDetventaService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { 
    this.url = _global.url;
    this.n = 1;
    this.nu = 15;
    this.plu = false;
    
    this.identity = this._api7.getIdentity();
  }

  ngOnInit() {
    this.GET();
  }
  GET(){
    this._route.params.forEach((params: Params) => {
     let id = params['id'];

      this._api.GetId(id).subscribe(response =>{
       this.modelos = response.modelo;
       console.log(response);

    })
   });
 }
 cantida(termino: string){
  if(termino >= this.n && termino <= this.nu){
    this.plu= true;
    localStorage.setItem('cantidad', JSON.stringify(termino));

  }if(termino != this.n && termino != this.nu){
    this.plu= false;


  }

}

  bus(termino:string,can,cli){
   
     cli=this.identity.userName;
     can=localStorage.getItem('cantidad');
     
    
      this._api2.Getpro(termino,can,cli)
      .subscribe(response =>{
        console.log(response);
    //   this.suma();
        localStorage.removeItem('cantidad');
        localStorage.setItem('cantidad', JSON.stringify('1'));
       // this._router.navigate(['/Carrito/',this.identity._id]);
  
       Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se agrego al Carrito',
          showConfirmButton: false,
          timer: 500
         
        })
      },
      error=>{
        console.log(<any> error);
      });
    }
  
   
  }
  

  




 
