import { Medico } from "app/models/medico";
import { Exame } from "app/models/exame";

export class Consulta {
    public id: number;
    public data: string = "";
    public hora: string = "";
    public medico: Medico;
    public exames: Exame[] = [];
    public descricao: string = "";

    constructor(id: number, data: string, hora: string, medico: Medico, exames: Exame[], descricao: string) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.medico = medico;
        this.exames = exames;
        this.descricao = descricao;
    }
}