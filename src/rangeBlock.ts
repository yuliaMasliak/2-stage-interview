import { InputRange } from './inputRange';

export class rangeBlock {
  input: InputRange;
  constructor() {
    this.input = new InputRange();
  }

  createInputs() {
    const drawRangeBlock = document.createElement('div') as HTMLElement;
    drawRangeBlock.classList.add('range-block');
    for (let i = 1; i < 4; i += 1) {
      drawRangeBlock.append(this.input.createInput(i));
    }
    return drawRangeBlock as Node;
  }
}
