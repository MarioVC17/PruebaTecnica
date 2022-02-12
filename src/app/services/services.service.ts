import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  nombre = "";

  constructor() { }

  enviar(nombre:string){
    this.nombre=nombre;
  }

  devolver(){
    return this.nombre;
  }
}
