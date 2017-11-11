import { Medico } from "app/models/medico";
import { Exame } from "app/models/exame";

export class Consulta {
    private _id: number;
    private _data: string = "";
    private _hora: string = "";
    private _medico: Medico;
    private _exames: Exame[] = [];
    private _descricao: string = "";

    constructor(id: number, data: string, hora: string, medico: Medico, exames: Exame[], descricao: string) {
        this._id = id;
        this._data = data;
        this._hora = hora;
        this._medico = medico;
        this._exames = exames;
        this._descricao = descricao;
    }
}