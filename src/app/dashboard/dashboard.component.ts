import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{

    public paciente: any;

    constructor() {
        this.paciente = '';
    }

    ngOnInit() {
        
    }

    public onSelectPaciente() {
        this.paciente = {
            "cartaoSus": "005320565036630",
            "nome": "Matheus Augusto Gambarin",
            "dataNascimento": "20/08/1997",
            "cpf": "045.446.125-94"
        }
    }
    
}
