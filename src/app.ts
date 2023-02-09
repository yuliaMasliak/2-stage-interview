import { InputRange } from './inputRange';
import { OutputBlock } from './outputBlock';
import { RangeBlock } from './rangeBlock';
import { ResetButton } from './resetButton';

export class App {
  outputBlock: OutputBlock;

  rangeBlock: RangeBlock;

  resetButton: ResetButton;

  html: HTMLElement;

  inputRange: InputRange;

  constructor(html: HTMLElement) {
    this.html = html;
    this.outputBlock = new OutputBlock();
    this.rangeBlock = new RangeBlock();
    this.resetButton = new ResetButton(this.html);
  }

  start() {
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');

    appBlock.append(this.rangeBlock.createInputs(), this.outputBlock.createInputsValues());
    this.html.append(appBlock, this.resetButton.createBtn());
  }
}

export default App;
