import { Component, OnInit, ViewChild } from '@angular/core';
import { categoria } from '../../modelo/categoria';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiCategoriaService } from '../../servicios/api-categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['../../estilos/angular-material.css']
})
export class CategoriaComponent implements OnInit {

  displayedColums : String[] = ['nombre','editar', 'eliminar'];
  modelo: categoria[];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginacion: MatPaginator;

  constructor(
    private _Api: ApiCategoriaService
  ) { }

  ngOnInit() {
    this._Api.Get().subscribe(response => {
      this.modelo = response.modelo;
      this.dataSource = new MatTableDataSource<categoria>(this.modelo);
      this.dataSource.paginator = this.paginacion;
    },
    error => {
      console.log(<any>error);
    });
  }
}
