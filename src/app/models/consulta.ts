import { Medico } from "app/models/medico";
import { Exame } from "app/models/exame";

export class Consulta {
    public data: string = "";
    public medico: Medico;
    public exames: Exame[] = [];
    public descricao: string = "";
}