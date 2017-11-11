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
            "subExame": [
                {
                    "nome": "Vitamina B12",
                    "analistaExame": "Joaquinho Marques",
                    "material": "Sangue",
                    "metodo": "Quimioluminescencia",
                    "equipamento": "Centaur XP - Siemens",
                    "resultado": "1582",
                    "valoresReferencia": "214 a 914 pg/ml"
                },{
                    "nome": "25-Hidroxi - Vitamina D Total (D2 + D3)",
                    "analistaExame": "Juan Silva",
                    "material": "Sangue",
                    "metodo": "Quimioluminescencia",
                    "equipamento": "Dxi - Beckman Coulter",
                    "resultado": "53,2",
                    "valoresReferencia": "20 a 100 ng/ml"
                }
            ]
        };
    }

}
