import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Paciente } from 'app/models/paciente';
import { ServiceDados } from 'app/service/service';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    public paciente: Paciente[] = [];
    public pacienteFiltrado: Paciente;
    public numeroSUS: String = "";

    constructor(private service : ServiceDados) {
        this.paciente = service.getTodosPacientes();
    }

    ngOnInit() {
    }

    filtrarPaciente(filtro: string) {
        this.paciente.forEach(element => {
            if (element.cadastroSUS === filtro) {
                this.pacienteFiltrado = element;
            }
        });
    }
}