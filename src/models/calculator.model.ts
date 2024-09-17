
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class CalculatorModel implements ICalculatorModel {
  private _buffer: string = '';
  // private array: string[];

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  public pressActionKey(key: ActionKeys): void {
    this._buffer += key;
 
    const number = parseInt(this._buffer[0]) + parseInt(this._buffer[2])
    this._buffer =  number.toString()
    
  }

  public display(): string {
    return this._buffer;
  }

}
