import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Tipo do Exame', 'Data da Solicitação', 'Data do Resultado', 'Status'],
            dataRows: [
                ['Sangue', '20/04/2017', '30/04/2017', 'Resultado Pronto'],
                ['Sangue', '26/06/2017', '15/07/2017', 'Resultado Pronto'],
                ['Raio X', '01/07/2017', '30/07/2017', 'Resultado Pronto'],
                ['Mamografia', '30/08/2017', '15/09/2017', 'Resultado Pronto'],
                ['Desintometria óssea', '15/09/2017', '26/09/2017', 'Resultado Pronto'],
                ['Raio X', '23/09/2017', '-', 'Esperando Resultados']
            ]
        };
    }
}
