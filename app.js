// Range and Range text updation
const rangeTxt = document.getElementById("rangeTxt");
const rangeBar = document.getElementById("rangeBar");
const passTxt = document.getElementById("passText");

rangeTxt.textContent = rangeBar.value;

rangeBar.addEventListener("input", () => {
  rangeTxt.textContent = rangeBar.value;
  changeClr();
});

// Strength Bar color change code

const redClr = "#f73c3c";
const orangeClr = "#f7a13c";
const greenClr = "#8ee366";

function changeClr() {
  const inds = document.querySelectorAll(".ind");

  for (let i = 0; i < inds.length; i++) {
    const indicator = inds[i];

    if (rangeBar.value < 8) {
      indicator.style.backgroundColor = redClr;
      indicator.style.borderColor = redClr;
    } else if (rangeBar.value >= 8 && rangeBar.value < 12) {
      indicator.style.backgroundColor = orangeClr;
      indicator.style.borderColor = orangeClr;
    } else if (rangeBar.value >= 12) {
      indicator.style.backgroundColor = greenClr;
      indicator.style.borderColor = greenClr;
    } else {
      indicator.style.backgroundColor = "transparent";
      indicator.style.borderColor = "#9386e3";
    }
  }
}

//Checkbox Selectors

const upChk = document.getElementById("ucase");
const lowChk = document.getElementById("lcase");
const numChk = document.getElementById("include-num");
const symChk = document.getElementById("symb");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const sym = "!@#$%^&*()_+-={}[]|:;<>,.?";

function generatePass() {
  let password = "";
  let len = rangeBar.value;
  let chars = "";

  chars += upChk.checked ? uppercase : "";
  chars += lowChk.checked ? lowercase : "";
  chars += numChk.checked ? number : "";
  chars += symChk.checked ? sym : "";

  for (let i = 0; i < len; i++) {
    let r = Math.floor(Math.random() * chars.length);
    password += chars.charAt(r);
  }

  passTxt.value = password;
}

document.getElementById("genBtn").addEventListener("click", generatePass);
