import { InputRange } from './inputRange';

export class outputBlock {
  input: InputRange;
  inputValue: number;
  constructor() {
    this.input = new InputRange();
    this.inputValue = this.input.inputValue;
  }

  createInputsValues() {
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    for (let i = 1; i < 4; i += 1) {
      outputValuesBlock.append(this.input.createInputValues(i, this.inputValue));
    }
    return outputValuesBlock as Node;
  }
}
