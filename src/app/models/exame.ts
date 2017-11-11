export class Exame {
    private id: number;
    private tipo: string = "";
    private dataSolicitacao: string = "";
    private status: string = "";
    private resultado: string = "";

    constructor (id: number, tipo: string, dataSolicitacao: string, status: string, resultado: string) {
        this.id = id;
        this.tipo = tipo;
        this.dataSolicitacao = dataSolicitacao;
        this.status = status;
        this.resultado = resultado;
    }
}