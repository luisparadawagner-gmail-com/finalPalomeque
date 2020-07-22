import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Cliente } from './../claseCliente/cliente';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formCliente : FormGroup;
  param : any;
  cliente : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.cliente = this.param;
    } 

    this.initForm(this.cliente);
  }

  nombreControl = new FormControl('User');

   initForm(modiicado : Cliente){
     this.formCliente = this.fb.group({
      nombre : [modiicado ? modiicado.nombre:'', Validators.required],
      apellido : [modiicado ? modiicado.apellido:'', Validators.required],
      telefono : [modiicado ? modiicado.telefono:'', Validators.required],
      direccion : [modiicado ? modiicado.direccion:'', Validators.required],
      nacimiento : [modiicado ? modiicado.nacimiento:'', Validators.required]
     });
   }
   enviar(){
    let clienteTemp : Cliente = this.formCliente.value;
    this.router.navigate(['planilla-component', clienteTemp]);
    debugger;
   } 

}
