import { RangeBlock } from './rangeBlock';

export class OutputBlock extends RangeBlock {
  createInputsValues() {
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    for (let i = 1; i < 4; i += 1) {
      outputValuesBlock.append(this.createOutputValues(i));
    }
    return outputValuesBlock as Node;
  }
}
