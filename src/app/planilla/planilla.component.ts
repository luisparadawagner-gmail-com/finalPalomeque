import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteComponent } from './../cliente/cliente.component';
import { RutinaComponent } from './../rutina/rutina.component';
import { Cliente } from './../claseCliente/cliente';
import { Rutina } from './../claseRutina/rutina';
import { ServicioService } from '../servicio/servicio.service';

@Component({
  selector: 'app-planilla',
  templateUrl: './planilla.component.html',
  styleUrls: ['./planilla.component.css']
})
export class PlanillaComponent implements OnInit {

  displayedColumns: string [] = ['nombre' , 'apellido' , 'telefono', 'direccion', 'nacimiento', 'rutina', 'repeticiones', 'peso', 'agregar', 'modificar'];
  dataSource : any[] = [];
  param : any;

  constructor(private servicioService : ServicioService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {

    this.getCliente();
    // this.getRutina();

  }

  getCliente(){
    this.servicioService.getCliente().subscribe((cliente)=>{
      debugger;
      this.dataSource = cliente;

      this.param = this.route.snapshot.params;
      if (Object.keys(this.param).length > 0){
        this.recibeCliente(this.param);
      }
    });
  }

  recibeCliente(cliente : ClienteComponent){
    debugger;
    this.dataSource.push(cliente);
  }

  editar(cliente) {	
    let clienteTemp : Cliente = {
      nombre : cliente.nombre,
      apellido : cliente.apellido,
      telefono : cliente.telefono,
      direccion : cliente.direccion,
      nacimiento : cliente.nacimiento
    }

    this.router.navigate(['/cliente-component', cliente]);
    debugger;	
  }

  // getRutina(){
  //   this.servicioService.getRutina().subscribe((rutina)=>{
  //     debugger;
  //     this.dataSource = rutina;

  //     this.param = this.route.snapshot.params;
  //     if (Object.keys(this.param).length > 0){
  //       this.recibeRutina(this.param);
  //     }
  //   });
  // }

  // recibeRutina(rutina : RutinaComponent){
  //   debugger;
  //   this.dataSource.push(rutina);
  // }

  agregar(rutina) {	
    let rutinaTemp : Rutina = {
      rutina : rutina.rutina,
      repeticiones : rutina.repeticiones,
      peso : rutina.peso
      
    }

    this.router.navigate(['/rutina-component', rutina]);
    debugger;	
  }

}
