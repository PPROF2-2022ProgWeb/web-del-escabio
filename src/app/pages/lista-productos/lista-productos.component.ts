import { Component} from '@angular/core';
import { productos } from '../../../productos-bd';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent {
  productos = productos;

  constructor() { }

  ngOnInit(): void {
  }
}