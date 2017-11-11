import { Consulta } from "app/models/consulta";

export class Paciente {
    public id: number;
    public nome: string = "";
    public cadastroSUS: string = "";
    public cpf: string = "";
    public consultas: Consulta[] = [];
    public dataNascimento: string = "";

    constructor (id: number, nome: string, cadastroSUS: string, cpf: string, consultas: Consulta[], dataNascimento: string) {
        this.id = id;
        this.nome = nome;
        this.cadastroSUS = cadastroSUS;
        this.cpf = cpf;
        this.consultas = consultas;
        this.dataNascimento = dataNascimento;
    }
}