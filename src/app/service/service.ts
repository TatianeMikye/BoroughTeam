import { Injectable } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { Exame } from 'app/models/exame';
import { Consulta } from 'app/models/consulta';
import { Medico } from 'app/models/medico';
import { SubExame } from 'app/models/subexame';

@Injectable()
export class ServiceDados {

  private _subExame1: SubExame = new SubExame(1,"Vitamina B12","Joaquinho Marques","Sangue", "Quimioluminescencia", "Centaur XP - Siemens", "1582", "214 a 914 pg/ml");
  private _subExame2: SubExame = new SubExame(2,"25-Hidroxi - Vitamina D Total (D2 + D3)","Juan Silva","Sangue", "Quimioluminescencia", "Dxi - Beckman Coulter", "53,2", "20 a 100 ng/ml");
  
  private _exame1: Exame = new Exame(1, "Hemograma", [this._subExame1, this._subExame2], "11/03/2017" ,"Pronto");
  private _exame2: Exame = new Exame(2, "Hemograma", [this._subExame2],"15/05/2017", "Pronto");

  private _medico1: Medico = new Medico(1, "Marcelo Amorim", "23918-2", "Maringá", "Paraná");
  private _medico2: Medico = new Medico(2, "Alvo Souza", "21383-9", "Londrina", "Paraná");

  private _consulta1: Consulta = new Consulta(1, "12/06/2012", "13:00", this._medico1, [this._exame1, this._exame2], "Consulta urgente");
  private _consulta2: Consulta = new Consulta(2, "14/08/2014", "16:30", this._medico1, [this._exame2], "Pacientes sente dores nas costas");
  private _consulta3: Consulta = new Consulta(3, "06/03/2007", "4:20", this._medico2, [this._exame1], "Consulta de rotina");

  private _paciente1: Paciente = new Paciente(1, "Vitor", "09777437994", "092387402", [this._consulta1, this._consulta2], "06/03/1997");
  private _paciente2: Paciente = new Paciente(2, "Eduardo", "09044963929", "092387402", [this._consulta2], "14/08/1994");
  private _paciente3: Paciente = new Paciente(3, "Matheus", "08053925995", "023.903.123-44", [this._consulta3], "05/02/1993");

  constructor() { }

  getTodosPacientes(): Paciente[] {
    return [this._paciente1, this._paciente2, this._paciente3];
  }

  getPacientesPeloId(id: number): Paciente {
    if (id === 1) {
      return this._paciente1;
    }
    if (id === 2) {
      return this._paciente2;
    }
    if (id === 3) {
      return this._paciente3;
    }
  }

  getTodasConsultas(): Consulta[] {
    return [this._consulta1, this._consulta2, this._consulta3];
  }

  getConsultasPeloId(id: number): Consulta {
    if (id === 1) {
      return this._consulta1;
    }
    if (id === 2) {
      return this._consulta2;
    }
    if (id === 3) {
      return this._consulta3;
    }
  }
}