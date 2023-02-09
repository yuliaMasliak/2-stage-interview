import { rangeBlock } from './rangeBlock';

export class outputBlock extends rangeBlock {
  constructor() {
    super();
  }

  createInputsValues() {
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    for (let i = 1; i < 4; i += 1) {
      this.createOutputValues(i);
      outputValuesBlock.append(this.createOutputValues(i));
    }
    return outputValuesBlock as Node;
  }
}
