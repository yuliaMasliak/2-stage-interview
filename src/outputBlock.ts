import { InputRange } from './InputRange';

export class OutputBlock {
  render(inputs: InputRange[]) {
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    inputs.forEach((input) => {
      outputValuesBlock.append(input.createOutputValues());
    });

    return outputValuesBlock as Node;
  }
}
