import { InputRange } from './inputRange';

export class ResetButton {
  createBtn(inputs: InputRange[]) {
    const ResetBtn = document.createElement('button');
    ResetBtn.classList.add('reset-btn');
    ResetBtn.innerHTML = 'Reset';

    ResetBtn.addEventListener('click', () => {
      inputs.forEach((input) => {
        console.log(input.createInput(1));
        //input.style.backgroundColor = 'red';
        input.resetOutputValues();
        input.getRangeValue();
        input.createOutputValues();
      });
    });
    return ResetBtn as HTMLElement;
  }
}
