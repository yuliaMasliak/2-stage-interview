import { InputRange } from './inputRange';

export class resetButton {
  input: InputRange;
  constructor() {
    this.input = new InputRange();
  }
  createBtn() {
    const ResetBtn = document.createElement('button');
    ResetBtn.classList.add('reset-btn');
    ResetBtn.innerHTML = 'Reset';
    return ResetBtn as HTMLElement;
  }
  deleteValues() {}
}
