export class Medico {
    private _id: number;
    private _nome: string = "";
    private _crm: string = "";
    private _cidade: string = "";
    private _estado: string = "";

    constructor (id: number, nome: string, crm: string, cidade: string, estado: string) {
        this._id = id;
        this._nome = nome;
        this._crm = crm;
        this._cidade = cidade;
        this._estado = estado;
    }
}