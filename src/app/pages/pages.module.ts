import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './../app-routing.module';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TarjetaProductoComponent } from './tarjeta-producto/tarjeta-producto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [
    ListaProductosComponent,
    TarjetaProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
})
export class PagesModule { }
