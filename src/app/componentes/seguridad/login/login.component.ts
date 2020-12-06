import { Component, OnInit } from '@angular/core';
import { user } from '../../../modelo/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiUsuarioService } from '../../../servicios/api-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../estilos/login.css'],
  providers:[ApiUsuarioService] 
})
export class LoginComponent implements OnInit {
  ipAddress:string;
  date = new Date();

  hide = true;
  public user: user;
  public identity;
  public token;  
  public nombre;  
  public status: string;
  public aut:boolean

  constructor(
    private _api: ApiUsuarioService,
    private _route: ActivatedRoute,
    private _router: Router,
   
  ) {
    this.user = new user('','','','','','','');
   
   }

   ngOnInit(): void {
    console.log(this._api.getIdentity());

    console.log(this._api.getToken());
  }
  onSubmit(){
    this.aut = true;
    //LOGUEAR AL USUARIO
    this._api.Post(this.user).subscribe(
      response => {
   this.identity = response.user;

   if(!this.identity || !this.identity._id){
  
   }else{
  
     this.identity.pw = '';
     localStorage.setItem('identity',JSON.stringify(this.identity));
    


          //CONSEGUIR TOKEN 
          this._api.Post(this.user, 'true').subscribe(
            response => {
         this.token = response.token;
        
               if(this.token.length <= 0){
                alert('EL TOKEN NO SE HA GENERADO');
              
               }else{
                   
                
                  this.aut = true
                localStorage.setItem('token',this.token);
    
                 this.status= 'sucess';
                 this._router.navigate(['/inicio']);
                 localStorage.setItem('numero', JSON.stringify(0));
          
                    }
                    if (this.identity.rol == 'user'){
                      localStorage.setItem('client', JSON.stringify(this.identity.userName+this.ipAddress+this.date));
                      localStorage.setItem('colonia', JSON.stringify(this.identity.colonia).replace(/\"/g, ""));
                      localStorage.setItem('numero', JSON.stringify(0));



                    }if(!this.identity.celular){
                      this._router.navigate(['/actualizar/',this.identity._id]);

                    };
                    


          },
          error =>{
                  console.log(<any>error);
                
                }
              );
        }
      },
      error =>{
        var errorMessage = <any>error;
        if( errorMessage != null){
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );

  }


}
