import { InputRange } from './inputRange';
import { OutputBlock } from './outputBlock';
import { RangeBlock } from './rangeBlock';
import { ResetButton } from './resetButton';

export class App {
  html: HTMLElement;

  constructor(html: HTMLElement) {
    this.html = html;
  }

  start() {
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    const inputs: InputRange[] = [];
    for (let i = 1; i < 4; i += 1) {
      const input: InputRange = new InputRange(i);
      inputs.push(input);
    }

    const resetBtn = new ResetButton();
    const rangeBlock = new RangeBlock();
    const outputBlock = new OutputBlock();

    appBlock.append(rangeBlock.render(inputs), outputBlock.render(inputs));
    this.html.append(appBlock, resetBtn.createBtn(inputs));
  }
}

export default App;
