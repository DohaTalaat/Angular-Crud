import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fact'
})
export class FactPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    let fa=1;
    for(let i=value;i>1;i--)
    {
      fa*=i;
    }
    return fa;
  }

}
