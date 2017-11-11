import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent implements OnInit {

    public resultado: any;
    ngOnInit(){
        this.resultado = {
            "tipoExame": "Hemograma",
            "nome": "Vitamina B12",
            "analistaExame": "Joaquinho Marques",
            "material": "Sangue",
            "metodo": "Quimioluminescencia",
            "equipamento": "Centaur XP - Siemens",
            "resultado": "1582",
            "valoresReferencia": "214 a 914pg/ml"
        };
    }

}
