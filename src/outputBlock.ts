import { InputRange } from './inputRange';

export class outputBlock {
  input: InputRange;
  constructor() {
    this.input = new InputRange();
  }

  createInputsValues() {
    const outputValuesBlock = document.createElement('div') as HTMLElement;

    for (let i = 0; i < 3; i += 1) {
      outputValuesBlock.append(this.input.createInputValues());
    }
    return outputValuesBlock as Node;
  }
}
