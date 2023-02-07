import { InputRange } from "./inputRange";

export class rangeBlock {
  input: InputRange;
  constructor() {
    this.input = new InputRange();
  }

  createInputs() {
    const drawRangeBlock = document.createElement("div") as HTMLElement;

    for (let i = 0; i < 3; i += 1) {
      drawRangeBlock.append(this.input.createInput());
    }
    return drawRangeBlock as Node;
  }
}
