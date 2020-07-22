import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators} from '@angular/forms';
import { Rutina } from './../claseRutina/rutina';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  formRutina : FormGroup;
  param : any;
  rutina : any;

  constructor(private route : ActivatedRoute, private fb : FormBuilder, private router : Router) { }

  ngOnInit() {
    debugger;		
    this.param = this.route.snapshot.params;

    if (Object.keys(this.param).length) {
      this.rutina = this.param;
    } 

    this.initForm(this.rutina);
  }

  nombreControl = new FormControl('User');

   initForm(modiicado : Rutina){
     this.formRutina = this.fb.group({
      rutina : ['', Validators.required],
      repeticiones : ['', Validators.required],
      peso : ['', Validators.required],
     });
   }

   enviar(){
    let rutinaTemp : Rutina = this.formRutina.value;
    this.router.navigate(['planilla-component', rutinaTemp]);
    debugger;
   } 
   
}
