import { IData } from './interfaces';

export class OutputBlock {
  output: HTMLElement;

  value: string;

  id: string;

  data: IData;

  startValue: string;

  constructor(id: string, value: string) {
    this.output = document.createElement('div') as HTMLElement;
    this.output.classList.add('output-value');
    this.data = {
      id,
      value,
    };

    this.startValue = `Range №${this.data.id} has value ${this.data.value}`;
  }

  renderContent() {
    this.output.innerHTML = this.startValue;
    return this.output as Node;
  }

  updateData(data: IData) {
    this.startValue = `Range №${data.id} has value ${data.value}`;

    this.renderContent();
  }
}
