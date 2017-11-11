export class Exame {
    private _id: number;
    private _tipo: string = "";
    private _dataSolicitacao: string = "";
    private _status: string = "";
    private _resultado: string = "";

    constructor (id: number, tipo: string, dataSolicitacao: string, status: string, resultado: string) {
        this._id = id;
        this._tipo = tipo;
        this._dataSolicitacao = dataSolicitacao;
        this._status = status;
        this._resultado = resultado;
    }
}