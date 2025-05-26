const input = document.getElementById("range");
input.addEventListener("input", (e) => {
  const value = e.target.value;
  const label = e.target.nextElementSibling;
  const labelWidth = getComputedStyle(label).getPropertyValue("width");
  const inputWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidthNum = Number.parseInt(labelWidth);
  const inputWidthNum = Number.parseInt(inputWidth);
  const min = e.target.min;
  const max = e.target.max;
  const left =
    value * (inputWidthNum / max) -
    labelWidthNum / 2 +
    scale(value, min, max, 10, -10);
  label.style.left = `${left}px`;
  label.innerHTML = input.value;
});
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
