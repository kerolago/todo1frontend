import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ClienteAdicionComponent } from './componentes/cliente/cliente-adicion/cliente-adicion.component';
import { ClienteEdicionComponent } from './componentes/cliente/cliente-edicion/cliente-edicion.component';
import { ClienteEliminarComponent } from './componentes/cliente/cliente-eliminar/cliente-eliminar.component';
import { ProductoAdicionComponent } from './componentes/producto/producto-adicion/producto-adicion.component';
import { ProductoEdicionComponent } from './componentes/producto/producto-edicion/producto-edicion.component';
import { ProductoEliminarComponent } from './componentes/producto/producto-eliminar/producto-eliminar.component';
import { SeguridadComponent } from './componentes/seguridad/seguridad.component';

import { RegistroComponent } from './componentes/seguridad/seguridad/registro/registro.component';
import { RegAdicionComponent } from './componentes/seguridad/seguridad/registro/reg-adicion/reg-adicion.component';
import { RegEdicionComponent } from './componentes/seguridad/seguridad/registro/reg-edicion/reg-edicion.component';
import { RegEliminarComponent } from './componentes/seguridad/seguridad/registro/reg-eliminar/reg-eliminar.component';
import { RolComponent } from './componentes/seguridad/seguridad/rol/rol.component';
import { RolAdicionComponent } from './componentes/seguridad/seguridad/rol/rol-adicion/rol-adicion.component';
import { RolEdicionComponent } from './componentes/seguridad/seguridad/rol/rol-edicion/rol-edicion.component';
import { RolEliminarComponent } from './componentes/seguridad/seguridad/rol/rol-eliminar/rol-eliminar.component';
import { UserComponent } from './componentes/seguridad/seguridad/user/user.component';
import { UserAdicionComponent } from './componentes/seguridad/seguridad/user/user-adicion/user-adicion.component';
import { UserEdicionComponent } from './componentes/seguridad/seguridad/user/user-edicion/user-edicion.component';
import { UserEliminarComponent } from './componentes/seguridad/seguridad/user/user-eliminar/user-eliminar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { CateAdicionComponent } from './componentes/categoria/cate-adicion/cate-adicion.component';
import { CateEdicionComponent } from './componentes/categoria/cate-edicion/cate-edicion.component';
import { CateEliminarComponent } from './componentes/categoria/cate-eliminar/cate-eliminar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './comunes/DemoMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    ClienteAdicionComponent,
    ClienteEdicionComponent,
    ClienteEliminarComponent,
    ProductoAdicionComponent,
    ProductoEdicionComponent,
    ProductoEliminarComponent,
    SeguridadComponent,
    RegistroComponent,
    RegAdicionComponent,
    RegEdicionComponent,
    RegEliminarComponent,
    RolComponent,
    RolAdicionComponent,
    RolEdicionComponent,
    RolEliminarComponent,
    UserComponent,
    UserAdicionComponent,
    UserEdicionComponent,
    UserEliminarComponent,
    InicioComponent,
   
    CategoriaComponent,
    CateAdicionComponent,
    CateEdicionComponent,
    CateEliminarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
