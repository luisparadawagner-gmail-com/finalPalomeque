import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpCliente : HttpClient) { }

  getCliente(): Observable<any>{
    return this.httpCliente.get('./../assets/cliente.json'); 
  }
}
