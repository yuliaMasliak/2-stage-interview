export class Events {
  public onChange: (data: string) => void;

  button: HTMLInputElement;

  constructor(button: HTMLInputElement) {
    this.button = button;

    this.button.onchange = function (datas) {
      const target = datas.target as HTMLInputElement;
      console.log(target.value);
      return target.value;
    };
  }
}
