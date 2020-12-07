import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegAdicionComponent } from './componentes/seguridad/seguridad/registro/reg-adicion/reg-adicion.component';
import { LoginComponent } from './componentes/seguridad/login/login.component';
import { RolAdicionComponent } from './componentes/seguridad/seguridad/rol/rol-adicion/rol-adicion.component';
import { RolEdicionComponent } from './componentes/seguridad/seguridad/rol/rol-edicion/rol-edicion.component';
import { RolEliminarComponent } from './componentes/seguridad/seguridad/rol/rol-eliminar/rol-eliminar.component';
import { AuthtGuard } from './shared/segu/autht.guard';
import { SeguridadComponent } from './componentes/seguridad/seguridad.component';
import { RegEdicionComponent } from './componentes/seguridad/seguridad/registro/reg-edicion/reg-edicion.component';
import { UserAdicionComponent } from './componentes/seguridad/seguridad/user/user-adicion/user-adicion.component';
import { UserEdicionComponent } from './componentes/seguridad/seguridad/user/user-edicion/user-edicion.component';
import { UserEliminarComponent } from './componentes/seguridad/seguridad/user/user-eliminar/user-eliminar.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CateAdicionComponent } from './componentes/categoria/cate-adicion/cate-adicion.component';
import { CateEdicionComponent } from './componentes/categoria/cate-edicion/cate-edicion.component';
import { CateEliminarComponent } from './componentes/categoria/cate-eliminar/cate-eliminar.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { ProductoAdicionComponent } from './componentes/producto/producto-adicion/producto-adicion.component';
import { ProductoEdicionComponent } from './componentes/producto/producto-edicion/producto-edicion.component';
import { ProductoEliminarComponent } from './componentes/producto/producto-eliminar/producto-eliminar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TarjetaComponent } from './componentes/inicio/tarjeta/tarjeta.component';
import { VentaclienteComponent } from './componentes/venta/ventacliente/ventacliente.component';
import { VentasComponent } from './componentes/venta/ventas/ventas.component';
import { ComprasComponent } from './componentes/compras/compras.component';
import { RegistrarComponent } from './componentes/compras/registrar/registrar.component';
import { ComEditarComponent } from './componentes/compras/com-editar/com-editar.component';
import { ComEliminarComponent } from './componentes/compras/com-eliminar/com-eliminar.component';



const routes: Routes = [
  { path: 'registro', component: RegAdicionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component:InicioComponent},

  ///////////////////////////seguridad

  { path: 'seguridad', component: SeguridadComponent,canActivate:[AuthtGuard]},

  { path: 'rol-adicion', component: RolAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'rol-edicion/:id', component: RolEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'rol-eliminar/:id', component: RolEliminarComponent,canActivate:[AuthtGuard]},


  { path: 'reg-adicion', component:UserAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'reg-edicion/:id',component: UserEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'reg-eliminar/:id', component: UserEliminarComponent,canActivate:[AuthtGuard]},

/////////////////////////categoria

  { path: 'categoria', component:CategoriaComponent},
  { path: 'cat-adicion', component:CateAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'cat-edicion/:id',component: CateEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'cat-eliminar/:id', component: CateEliminarComponent,canActivate:[AuthtGuard]},

  ///////////////////////producto
  { path: 'producto', component:ProductoComponent},
  { path: 'pro-adicion', component:ProductoAdicionComponent,canActivate:[AuthtGuard]},
  { path: 'pro-edicion/:id',component: ProductoEdicionComponent,canActivate:[AuthtGuard]},
  { path: 'pro-eliminar/:id', component: ProductoEliminarComponent,canActivate:[AuthtGuard]},

  ///// tarjeta
  { path: 'tarjeta/:id', component:TarjetaComponent},
  ///// vista cliente
  { path: 'pedidos/:id', component:VentaclienteComponent},
  ////// ver ventas
  { path: 'ventas', component:VentasComponent},
  ///// compras
  { path: 'compras', component:ComprasComponent},
  { path: 'com-adicion', component:RegistrarComponent,canActivate:[AuthtGuard]},
  { path: 'com-edicion/:id',component: ComEditarComponent,canActivate:[AuthtGuard]},
  { path: 'com-eliminar/:id', component: ComEliminarComponent,canActivate:[AuthtGuard]},

 //////////

  
  { path: '**',pathMatch: 'full', redirectTo:'inicio'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
