import { InputRange } from './inputRange';
import { outputBlock } from './outputBlock';
import { rangeBlock } from './rangeBlock';
import { resetButton } from './resetButton';

export class App {
  outputBlock: outputBlock;
  rangeBlock: rangeBlock;
  resetButton: resetButton;
  html: HTMLElement;
  InputRange: InputRange;

  constructor(html: HTMLElement) {
    this.html = html;
    this.outputBlock = new outputBlock();
    this.rangeBlock = new rangeBlock();
    this.resetButton = new resetButton(this.html);
    this.InputRange = new InputRange();
  }

  start() {
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    this.InputRange.createInput(1).addEventListener('input', () => {
      alert('Hi');
    });
    appBlock.append(this.rangeBlock.createInputs(), this.outputBlock.createInputsValues());
    this.html.append(appBlock, this.resetButton.createBtn());
  }
}

export default App;
