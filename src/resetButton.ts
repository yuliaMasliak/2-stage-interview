export class resetButton {
  createBtn() {
    const ResetBtn = document.createElement("button");
    ResetBtn.innerHTML = "Reset";
    return ResetBtn as HTMLElement;
  }
}
