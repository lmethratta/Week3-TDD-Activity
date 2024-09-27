
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {
  private _buffer: string = '';
  private array: string[];
  private result: number

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  public computeOperation(firstNum: number, secondNum: number, operator: string): number{
    switch(operator){
      case '*':
        return (firstNum * secondNum)
      case '/':
        return (firstNum / secondNum)
      case '+':
        return (firstNum + secondNum)
      case '-':
        return (firstNum - secondNum)
     

    }
  }
  public pressActionKey(key: ActionKeys): void {
    this.result = 0
    this._buffer += key;
    this.array = this._buffer.split("")
     
   
    for (let i = 0; i < this.array.length - 1; i++) {
       // operators are at modulo 2
      if (i % 2 == 1) {
          // compute operation based on number before (i-1) + after operator (i+1)
          const result = this.computeOperation(parseInt(this.array[i - 1]), parseInt(this.array[i + 1]), this.array[i]);
          // replace array with computed result
          this.array.splice(i - 1, 3, result.toString());
          console.log(this.array)
          i -= 2;
      }
      if (this.array[1] === '='){
        this._buffer =  this.array[0].toString()
      }
  }

    // const result = this.computeOperation(parseInt(this._buffer[0]), parseInt(this._buffer[2]), this._buffer[1])
    // const number = parseInt(this._buffer[0]) + parseInt(this._buffer[2])
    
  }

  public display(): string {
    return this._buffer;
  }

}
