import { InputRange } from './inputRange';

export class RangeBlock {
  static render(inputs: InputRange[]): string | Node {
    const drawRangeBlock = document.createElement('div') as HTMLElement;
    drawRangeBlock.classList.add('range-block');
    for (let i = 0; i < inputs.length; i += 1) {
      drawRangeBlock.append(inputs[i].createInput(i + 1));
    }

    return drawRangeBlock as HTMLElement;
  }
}
