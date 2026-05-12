let display = document.getElementById("display");
let isDegree = true;

// Add input
function append(value) {
  display.value += value;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Delete
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Power (^)
function power() {
  display.value += "**";
}

// Factorial
function factorial() {
  let num = parseInt(display.value);
  let result = 1;
  for (let i = 1; i <= num; i++) result *= i;
  display.value = result;
}

// Degree toggle
function toggleDeg() {
  isDegree = !isDegree;
  alert(isDegree ? "Degree Mode" : "Radian Mode");
}

// Trigonometry
function sin() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.sin(val);
}

function cos() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.cos(val);
}

function tan() {
  let val = parseFloat(display.value);
  if (isDegree) val = val * Math.PI / 180;
  display.value = Math.tan(val);
}

// Inverse (1/x)
function inverse() {
  display.value = 1 / parseFloat(display.value);
}

// Log base 10
function log() {
  display.value = Math.log10(parseFloat(display.value));
}

// Natural log
function ln() {
  display.value = Math.log(parseFloat(display.value));
}