import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { Productoservicio } from '../productoservicio';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  imports: [FormsModule],
  templateUrl: './editar-producto.html'
})
export class EditarProducto {
  producto: Producto = new Producto();
  id!: number;

  private productoServicio = inject(Productoservicio);
  private ruta = inject(ActivatedRoute);
  private enrutador = inject(Router);

  ngOnInit(){
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe({
      next: (datos) => this.producto = datos,
      error: (errores: any) =>console.log(errores)
    });
  }

  onSubmit(){
    //editar producto
    this.guardarProducto();
  }

  guardarProducto(){
    this.productoServicio.editarProducto(this.id, this.producto).subscribe({
      next: (datos) => this.irProductoLista(),
      error: (errores) => console.log(errores)
    });
  }

  irProductoLista(){
    this.enrutador.navigate(['/productos']);
  }
}
