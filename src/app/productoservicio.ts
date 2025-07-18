import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class Productoservicio {

  private urlBase = "http://localhost:8080/inventario-app/productos";
  private clienteHttp = inject(HttpClient);

  obtenerProductosLista(): Observable<Producto[]>{
   return this.clienteHttp.get<Producto[]>(this.urlBase);
  }

  agregarProducto(producto: Producto):Observable<Object>{
    return this.clienteHttp.post(this.urlBase,producto);
  }

  obtenerProductoPorId(id: number){
    return this.clienteHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  editarProducto(id:number,producto: Producto){
    return this.clienteHttp.put(`${this.urlBase}/${id}`,producto);

  }

  eliminarProducto(id:number): Observable<object>{
    return this.clienteHttp.delete(`${this.urlBase}/${id}`);
  }

}
