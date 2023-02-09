import { OutputBlock } from './outputBlock';

export class ResetButton extends OutputBlock {
  html: HTMLElement;

  constructor(html: HTMLElement) {
    super();
    this.html = html;
  }

  createBtn() {
    const ResetBtn = document.createElement('button');
    ResetBtn.classList.add('reset-btn');
    ResetBtn.innerHTML = 'Reset';

    ResetBtn.addEventListener('click', () => {
      this.html.innerHTML = '';
      for (let i = 1; i < 4; i += 1) {
        this.resetOutputValues();
      }
      const appBlock = document.createElement('div');
      appBlock.classList.add('app');
      appBlock.append(this.createInputs(), this.createInputsValues());
      this.html.append(appBlock, ResetBtn);
    });
    return ResetBtn as HTMLElement;
  }
}
