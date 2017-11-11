import { Injectable } from '@angular/core';
import { Paciente } from 'app/models/paciente';
import { Exame } from 'app/models/exame';
import { Consulta } from 'app/models/consulta';
import { Medico } from 'app/models/medico';

@Injectable()
export class ServiceDados {
  private _exame1: Exame = new Exame(1, "Hemograma", "11/03/2017", "Pronto", "");
  private _exame2: Exame = new Exame(2, "Colesterol", "15/05/2017", "Pronto", "");
  private _exame3: Exame = new Exame(3, "Glicose", "11/09/2017", "Pronto", "");
  private _exame4: Exame = new Exame(4, "PCR", "11/11/2017", "Aguardando", "");
  private _exame5: Exame = new Exame(5, "Beta-HCG", "12/12/2012", "Pronto", "");
  private _exame6: Exame = new Exame(6, "Endoscopia", "12/01/2013", "Cancelado", "");

  private _medico1: Medico = new Medico(1, "Marcelo Amorim", "23918-2", "Maringá", "Paraná");
  private _medico2: Medico = new Medico(2, "Alvo Souza", "21383-9", "Londrina", "Paraná");

  private _consulta1: Consulta = new Consulta(1, "12/06/2012", "13:00", this._medico1, [this._exame1, this._exame2], "Consulta urgente");
  private _consulta2: Consulta = new Consulta(2, "14/08/2014", "16:30", this._medico1, [this._exame3, this._exame4], "Pacientes sente dores nas costas");
  private _consulta3: Consulta = new Consulta(3, "06/03/2007", "4:20", this._medico2, [this._exame5, this._exame6], "Consulta de rotina");

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
}