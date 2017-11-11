export class SubExame {
    private id: number;
    private nome: string;
    private analistaExame: string;
    private material: string = "";
    private metodo: string = "";
    private equipamento: string = "";
    private resultado: string = "";
    private valoresReferencia: string = "";

    constructor (id: number, nome: string, analistaExame: string, material: string, metodo: string, equipamento: string, resultado: string, valoresReferencia: string) {
        this.id = id;
        this.nome = nome;
        this.analistaExame = analistaExame;
        this.material = material;
        this.metodo = metodo;
        this.equipamento = equipamento;
        this.resultado = resultado;
        this.valoresReferencia = valoresReferencia;        
    }
}