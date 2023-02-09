import { InputRange } from './inputRange';

export class rangeBlock extends InputRange {
  constructor() {
    super();
  }

  createInputs() {
    const drawRangeBlock = document.createElement('div') as HTMLElement;
    drawRangeBlock.classList.add('range-block');
    for (let i = 1; i < 4; i += 1) {
      this.createInput(i).addEventListener('input', () => {
        this.createOutputValues(i);
      });
      drawRangeBlock.append(this.createInput(i));
    }
    return drawRangeBlock as HTMLElement;
  }
}
