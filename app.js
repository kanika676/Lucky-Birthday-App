const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

function checkBirthDateIsLucky(){
    const date = dateOfBirth.ariaValueMax;
    const sum = calculateSum(date);
}
function calculateSum(date){
    
}

checkNumberButton.addEventListener('click',checkNumberIsLucky)