import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { Consulta } from 'app/models/consulta';
import { ServiceDados } from 'app/service/service';

@Component({
  selector: 'app-consultas-do-paciente',
  templateUrl: './consultas-do-paciente.component.html',
  styleUrls: ['./consultas-do-paciente.component.css']
})
export class ConsultasDoPacienteComponent implements OnInit {

  id: number;
  consultas: Consulta[] = [];

  constructor(private route: ActivatedRoute, private service : ServiceDados) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['paramKey']);
    });
    this.consultas = this.service.getPacientesPeloId(this.id).consultas;
  }
}