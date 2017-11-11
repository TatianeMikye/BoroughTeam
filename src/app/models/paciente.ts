import { Consulta } from "app/models/consulta";

export class Paciente {
    private _id: number;
    private _nome: string = "";
    private _cadastroSUS: string = "";
    private _cpf: string = "";
    private _consultas: Consulta[] = [];

    constructor (id: number, nome: string, cadastroSUS: string, cpf: string, consultas: Consulta[]) {
        this._id = id;
        this._nome = nome;
        this._cadastroSUS = cadastroSUS;
        this._cpf = cpf;
        this._consultas = consultas;
    }
}