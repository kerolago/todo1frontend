import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { rol } from '../../../../../modelo/rol';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiRolService } from '../../../../../servicios/api-rol.service';

@Component({
  selector: 'app-rol-adicion',
  templateUrl: './rol-adicion.component.html',
  styleUrls: ['./rol-adicion.component.css']
})
export class RolAdicionComponent implements OnInit {

  modelo: rol;

  constructor(
    private _api: ApiRolService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
      this.modelo = new rol('','');
     }

  ngOnInit() {
  }

  onSumit(){
    if(this.modelo.rol){
      this._api.Post(this.modelo).subscribe(response => {
        if(!response.error_estado){
          this._router.navigate(['/seguridad']);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:'Se Guardo Exitosamente',
            showConfirmButton: false,
            timer: 1500})
        }else {

        }

        
      });
    }else {

    }

  }

}
