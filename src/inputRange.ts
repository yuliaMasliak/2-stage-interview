export class InputRange {
  inputCounter: number = 0;
  inputValue: number = 0;
  inputId: number = (this.inputCounter += 1);

  consrtuctor() {
    this.inputId;
    this.inputValue;
  }

  createInput() {
    const range = document.createElement("input") as HTMLInputElement;
    range.setAttribute("type", "range");
    range.setAttribute("id", `${this.inputId}`);
    this.inputCounter += 1;
    this.inputValue = Number(range.value);
    return range as HTMLElement;
  }
  createInputValues() {
    const outputValue = document.createElement("div") as HTMLInputElement;
    outputValue.classList.add("output-value");
    outputValue.setAttribute("id", `${this.inputId}-value`);
    outputValue.innerHTML = `Range #${this.inputId} is ${this.inputValue}`;
    return outputValue as HTMLElement;
  }
}
