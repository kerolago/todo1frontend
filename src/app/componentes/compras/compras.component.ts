import { Component, OnInit, ViewChild } from '@angular/core';
import { producto } from '../../modelo/producto';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiProductoService } from '../../servicios/api-producto.service';
import { ApiComprasService } from '../../servicios/api-compras.service';
import { detcompra } from '../../modelo/detcompra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['../../estilos/angular-material.css']
})
export class ComprasComponent implements OnInit {

  displayedColums: String[] = ['cantidad','total','nombrepro','precio','editar', 'eliminar'];
  modelo: detcompra[];
  dataSource;

  @ViewChild(MatPaginator, {static : true}) paginacion: MatPaginator;

  constructor(
    private _api: ApiComprasService
  ) { }

  ngOnInit() {
    this._api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<detcompra>(this.modelo);
      this.dataSource.paginator = this.paginacion;
      
    },
    error => {
      console.log(<any>error);
    })
  }

}
