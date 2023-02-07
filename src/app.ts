import { outputBlock } from './outputBlock';
import { rangeBlock } from './rangeBlock';
import { resetButton } from './resetButton';

class App {
  outputBlock: outputBlock;
  rangeBlock: rangeBlock;
  resetButton: resetButton;
  body: HTMLElement;

  constructor() {
    this.outputBlock = new outputBlock();
    this.rangeBlock = new rangeBlock();
    this.resetButton = new resetButton();
    this.body = document.body;
  }

  start() {
    const appBlock = document.createElement('div');
    appBlock.append(this.outputBlock.createInputsValues(), this.rangeBlock.createInputs());
    this.body.append(appBlock, this.resetButton.createBtn());
  }
}

export default App;
