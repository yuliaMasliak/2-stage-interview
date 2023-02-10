export class InputRange {
  el: HTMLInputElement;

  constructor(id: number) {
    this.el = this.createInput(id);
  }

  public defaultValue = 30;

  createInput(inputId: number) {
    const range: HTMLInputElement = document.createElement('input') as HTMLInputElement;
    range.classList.add('range');
    range.setAttribute('type', 'range');
    range.setAttribute('min', '0');
    range.setAttribute('max', '100');
    range.setAttribute('id', `${inputId}`);
    range.setAttribute('value', `${this.defaultValue}`);
    return range as HTMLInputElement;
  }

  createOutputValues() {
    const outputValue = document.createElement('div') as HTMLElement;
    outputValue.innerHTML = this.getRangeValue();
    this.el.addEventListener('input', () => {
      alert('Hi');
      outputValue.innerHTML = this.getRangeValue();
    });
    return outputValue as HTMLElement;
  }

  getRangeValue() {
    return `Range №${this.el.getAttribute('id')} has value ${this.el.value}`;
  }

  resetOutputValues() {
    this.el.valueAsNumber = 0;
  }
}
