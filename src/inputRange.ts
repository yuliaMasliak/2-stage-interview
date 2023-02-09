export class InputRange {
  inputId: number;
  value: number;
  consrtuctor(inputId: number) {
    this.inputId = inputId;
    this.value = this.obj.value;
  }

  obj = {
    value: 30,
  };

  createInput(inputId: number) {
    const range = document.createElement('input') as HTMLInputElement;
    range.classList.add('range');
    range.setAttribute('type', 'range');
    range.setAttribute('min', '0');
    range.setAttribute('max', '100');
    range.setAttribute('id', `${inputId}`);
    range.setAttribute('value', `${this.obj.value}`);

    range.addEventListener('input', () => {
      range.setAttribute('value', `${range.valueAsNumber}`);
      this.obj.value = range.valueAsNumber;
      console.log(this.obj.value);
    });

    const rangeItem = document.createElement('div') as HTMLInputElement;
    rangeItem.append(range);
    return range as HTMLInputElement;
  }

  createOutputValues(id: number) {
    const outputValue = document.createElement('div') as HTMLInputElement;
    outputValue.classList.add('output-value');
    outputValue.innerHTML = '';
    outputValue.innerHTML = `Range №${id} has value ${this.obj.value}`;

    return outputValue as HTMLElement;
  }
  resetOutputValues(id: number) {
    this.obj.value = 0;
    return this.obj.value;
  }
}
