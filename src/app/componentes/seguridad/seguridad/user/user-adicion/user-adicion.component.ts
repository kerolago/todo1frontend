import { Component, OnInit } from '@angular/core';
import { ApiRegistroService } from '../../../../../servicios/api-registro.service';
import { ApiRolService } from '../../../../../servicios/api-rol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../../../../../modelo/user';
import { rol } from '../../../../../modelo/rol';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-adicion',
  templateUrl: './user-adicion.component.html',
  styleUrls: ['../../../../../estilos/angular-material.css'],
  providers: [ApiRegistroService]
})
export class UserAdicionComponent implements OnInit {

  modelo: user;
  rolmodelo: rol[];

  constructor(
    private _api: ApiRegistroService,
    private _apirol: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.modelo = new user('','','','','','','')
   }

  ngOnInit() {
    this.combo();
  }
  combo(){
    this._apirol.Get().subscribe(response => {
      this.rolmodelo= response.modelo;
    });  
  }

  onSubmit(){
    if(this.modelo.nombre && this.modelo.userName && this.modelo.email && this.modelo.rol && this.modelo.pw){
      this._api.Post(this.modelo).subscribe(response => {
        if(!response.error_estado){
          this._router.navigate(['/seguridad']);
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
