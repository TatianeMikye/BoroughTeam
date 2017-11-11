import { Medico } from "app/models/medico";
import { Exame } from "app/models/exame";

export class Consulta {
    private id: number;
    private data: string = "";
    private hora: string = "";
    private medico: Medico;
    private exames: Exame[] = [];
    private descricao: string = "";

    constructor(id: number, data: string, hora: string, medico: Medico, exames: Exame[], descricao: string) {
        this.id = id;
        this.data = data;
        this.hora = hora;
        this.medico = medico;
        this.exames = exames;
        this.descricao = descricao;
    }
}