import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { _global } from './_global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoService {
  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url = _global.url;
  }
  private extractData(res: Response){
    let body = res;
    return body || {};
  }

  Get(): Observable<any> {
    const httpOptions ={
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
       
      })
    };
    return this.http.get(this.url + 'producto', httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
        
      })
    };
    return this.http.get(this.url + 'producto/' + id, httpOptions).pipe(map(this.extractData));
  }

  Get1(nom: string): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    
    return this.http.get(this.url + 'producto/nombre/' + nom, httpOptions).pipe(map(this.extractData));
   }
   Get2(nom: string): Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    
    return this.http.get(this.url + 'producto/categoria/' + nom, httpOptions).pipe(map(this.extractData));
   }
  Patch(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.patch(this.url + 'producto/' + id, JSON.stringify(modelo), httpOptions).pipe();
  }
  subir( archivo: File, nombre: string,descripcion: string,precio: string, categoria: string): Observable<any>{
    let formData = new FormData();
    formData.append("archivo",archivo);
    formData.append("nombre",nombre);
    formData.append("descripcion",descripcion);
    formData.append("precio",precio);
    formData.append("categoria",categoria);

   
  
    
    
  
    return this.http.post(this.url +'producto' , formData).pipe();
  }

  Delete(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.url + 'producto/' + id, httpOptions).pipe();
  }
  Deleteed(id): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.delete(this.url + 'producto/archivo/' + id, httpOptions).pipe();
  }
  
  GetEli(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      })
    };
    return this.http.get(this.url + 'producto/eli/' + id, httpOptions).pipe(map(this.extractData));
 }



}


