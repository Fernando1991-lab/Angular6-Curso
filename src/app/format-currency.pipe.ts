import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //Mudançao da configuração regional para pt-BR, ou seja, o formato de moeda brasileira. O Intl é uma API do JavaScript que fornece uma maneira de formatar números, datas e moedas de acordo com as convenções regionais. O método NumberFormat é usado para criar um objeto que pode formatar números de acordo com as opções especificadas. No exemplo, estamos usando o estilo 'currency' e a moeda 'BRL' (Real Brasileiro) para formatar o valor como uma moeda brasileira.
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(value);
  }

}
