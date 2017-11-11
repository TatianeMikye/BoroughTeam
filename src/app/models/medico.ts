export class Medico {
    private id: number;
    private nome: string = "";
    private crm: string = "";
    private cidade: string = "";
    private estado: string = "";

    constructor (id: number, nome: string, crm: string, cidade: string, estado: string) {
        this.id = id;
        this.nome = nome;
        this.crm = crm;
        this.cidade = cidade;
        this.estado = estado;
    }
}