export class InputRange {
  inputId: number;
  inputValue: number;

  consrtuctor(inputId: number, inputValue: number) {
    this.inputId = inputId;
    this.inputValue = inputValue;
  }

  createInput(inputId: number) {
    const range = document.createElement('input') as HTMLInputElement;
    range.classList.add('range');
    range.setAttribute('type', 'range');
    range.setAttribute('min', '0');
    range.setAttribute('max', '100');
    range.setAttribute('id', `${inputId}`);
    range.setAttribute('value', `${50}`);
    this.inputValue = range.valueAsNumber;

    range.addEventListener('input', () => {
      range.setAttribute('value', `${range.valueAsNumber}`);
      this.inputValue = range.valueAsNumber;
      this.createInputValues(inputId, range.valueAsNumber);
    });
    const rangeItem = document.createElement('div') as HTMLInputElement;
    rangeItem.append(range);
    return rangeItem as HTMLElement;
  }
  createInputValues(id: number, value: number) {
    const outputValue = document.createElement('div') as HTMLInputElement;
    outputValue.classList.add('output-value');
    outputValue.setAttribute('id', `${id}-value`);
    outputValue.innerHTML = `Range #${id} has value ${value}`;
    const outputValuesBlock = document.createElement('div') as HTMLElement;

    for (let i = 1; i < 4; i += 1) {
      outputValuesBlock.append(outputValue);
    }
    return outputValuesBlock as Node;
  }
}
