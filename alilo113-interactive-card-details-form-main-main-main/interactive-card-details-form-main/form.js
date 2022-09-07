const form = document.getElementById("form");
const cardHolderName = document.getElementById("cardHolderName");
const cardHolerNameError = document.getElementById("cardHolerNameError");
const cardNum = document.getElementById("cardNum");
const cardHolderNumEror = document.getElementById("cardHolderNumEror");

form.addEventListener("submit",(e) => {

    if(cardHolderName.value === ""){
        cardHolerNameError.innerText = "can't be blank";
        cardHolderName.style.borderColor = "red";
        e.preventDefault();
    }
    else if(cardHolderName.value !== ""){
        console.log(cardHolderName.value);
        cardHolderName.style.borderColor = "green"
        e.preventDefault();
        cardHolerNameError.innerHTML = "";
    }

    let notCardNum = "9591 "
    
    if(cardNum.value === notCardNum){
        cardHolderNumEror.innerHTML = "wrond format, numbers only";
        cardNum.style.borderColor = "red";
    }
})