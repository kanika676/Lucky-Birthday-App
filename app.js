const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputMessage = document.querySelector("#output-message");

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if (sum % luckyNumber.value === 0) {
    console.log("Zero remainder");
    outputMessage.innerText = "You are lucky";
  } else {
    console.log("Not zero");
    outputMessage.innerText = "You are not lucky";
  }
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
