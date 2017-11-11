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
                ['Sangue', '20/04/2017', '30/04/2017', 'Resultado Pronto']
            ]
        };
    }
}
