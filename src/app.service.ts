import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumber(): number{
    const a=30;
    const b=40;
    const c=a+b;
    return c;
  }
  getString(): string{
    const name='Viktoriia';
    const lastname='Andrushchyk';
    const fullname=name+' '+lastname;
    return fullname;
  }
  getArrays():number[]{
    const list: number[]=[1,2,3];
    return list;
  }

  getEnums():number{
    const enum color{Black,White,Red};
    let c:color=color.Black;
    return c;
  }

  getMultitypeArrays():(string|number)[][]{
    const multlist:(string|number)[][]=[['Vika',5],['day',15]];
    return multlist;
  }

  getMultitypeValues():number|string{
    const d=17;
    return d;
  }
}
