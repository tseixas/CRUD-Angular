import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  msgs = [];

  constructor() { }

  calendar_pt = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qui', 'Sex', 'Sáb'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  saveSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Salvo com sucesso', detail: '' });
    return this.msgs;
  }
  saveError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Erro ao salvar', detail: '' });
    return this.msgs;
  }
  deleteSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Excluído com sucesso', detail: '' });
    return this.msgs;
  }
  deleteError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Erro ao excluir', detail: '' });
    return this.msgs;
  }
  customMsg(severity, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
    return this.msgs;
  }
}
