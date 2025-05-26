const inputs = document.querySelectorAll(".code");
inputs[0].focus();
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keydown", (event) => {
    if (event.code === "Backspace" && i > 0) {
      if (inputs[i].value) inputs[i].value = "";
      else {
        inputs[i].value = "";
        inputs[i - 1].focus();
      }
    }
    if (event.key >= 0 && event.key <= 9) {
      if (i >= inputs.length - 1) {
        setTimeout(() => {
          inputs[i].blur();
        }, 10);
      }
      setTimeout(() => {
        inputs[i + 1].focus();
      }, 1);
    }
  });
}
