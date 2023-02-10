import { InputRange } from './InputRange';

export class OutputBlock {
  static render(inputs: InputRange[]): string | Node {
    const outputValuesBlock = document.createElement('div') as HTMLElement;
    outputValuesBlock.classList.add('output-block');
    inputs.forEach((input) => {
      outputValuesBlock.append(input.createOutputValues());
    });

    return outputValuesBlock as Node;
  }
}
