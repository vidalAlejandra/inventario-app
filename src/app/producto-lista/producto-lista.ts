import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { Productoservicio } from '../productoservicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  imports: [],
  templateUrl: './producto-lista.html'
})
export class ProductoLista {
  productos!: Producto[];

  private productoServicio = inject(Productoservicio);
  private enrutador = inject(Router);


  ngOnInit(){
    //Carga los productos, en esta llamada
    this.obtenerProductos();
  }

  private obtenerProductos(): void{
    this.productoServicio.obtenerProductosLista().subscribe(
      {
        next: (datos) => {
          this.productos = datos;
        },
        error: (error) => {
          console.error("Error, no se obtuvo productos", error);
        }
      }
    );
  }

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id]);
  }

  eliminarProducto(id: number){
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (errores) => console.log(errores)
    })
  }

}
