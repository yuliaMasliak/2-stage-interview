export class InputRange {
  el: HTMLInputElement;

  id: number;

  constructor(id: number) {
    this.el = document.createElement('input') as HTMLInputElement;
    this.el.classList.add('range');
    this.el.setAttribute('type', 'range');
    this.el.setAttribute('min', '0');
    this.el.setAttribute('max', '100');
    this.el.setAttribute('id', `${id}`);
  }

  createInput() {
    return this.el as HTMLInputElement;
  }

  resetOutputValues() {
    this.el.valueAsNumber = 0;
  }
}
