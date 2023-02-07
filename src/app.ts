import { outputBlock } from './outputBlock';
import { rangeBlock } from './rangeBlock';
import { resetButton } from './resetButton';
import { InputRange } from './inputRange';

class App {
  outputBlock: outputBlock;
  rangeBlock: rangeBlock;
  resetButton: resetButton;
  InputRange: InputRange;
  body: HTMLElement;

  constructor() {
    this.outputBlock = new outputBlock();
    this.rangeBlock = new rangeBlock();
    this.resetButton = new resetButton();
    this.InputRange = new InputRange();
    this.body = document.body;
  }

  start() {
    const appBlock = document.createElement('div');
    appBlock.classList.add('app');
    appBlock.append(this.rangeBlock.createInputs(), this.outputBlock.createInputsValues());
    this.body.append(appBlock, this.resetButton.createBtn());
    this.resetButton.createBtn().addEventListener('click', () => {
      this.InputRange.inputValue = 0;
    });
  }
}

export default App;
