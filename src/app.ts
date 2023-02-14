import { InputRange } from './InputRange';
import { OutputBlock } from './outputBlock';
import { RangeBlock } from './rangeBlock';
import { ResetButton } from './resetButton';
import { Events } from './event';

export class App {
  html: HTMLElement;

  constructor(html: HTMLElement) {
    this.html = html;
  }

  start() {
    const inputs: InputRange[] = [];
    const output = document.createElement('div');
    output.classList.add('output');
    for (let i = 1; i < 4; i += 1) {
      const input: InputRange = new InputRange(i);
      inputs.push(input);
      const data = {
        id: input.createInput().id,
        value: input.createInput().value,
      };
      const outputBlock = new OutputBlock(`${data.id}`, `${data.value}`);
      outputBlock.renderContent();
      const newEvent = new Events(input.createInput());
      console.log(newEvent);
      input.createInput().onchange = () => {
        data.id = input.createInput().id;
        data.value = input.createInput().value;
        outputBlock.updateData(data);
      };

      output.append(outputBlock.renderContent());
    }

    const resetBtn = new ResetButton();
    const rangeBlock = new RangeBlock();
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    appBlock.append(rangeBlock.renderRanges(inputs), output);
    this.html.append(appBlock, resetBtn.createBtn(inputs));
  }
}
