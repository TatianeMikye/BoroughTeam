export class Exame {
    private id: number;
    private tipoExame: string;
    private subExame: Object;
    private dataSolicitacao: string = "";
    private status: string = "";
     
    constructor (id: number, tipoExame: string, subExame: Object, status: string, dataSolicitacao: string) {
        this.id = id;
        this.tipoExame = tipoExame;
        this.dataSolicitacao = dataSolicitacao;
        this.subExame = subExame;
        this.status = status;
    }
}