import { Consulta } from "app/models/consulta";

export class Paciente {
    public nome: string = "";
    public cadastroSUS: string = "";
    public cpf: string = "";
    public consultas: Consulta[] = [];
}