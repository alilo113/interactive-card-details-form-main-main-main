const form = document.getElementById("form");
const cardHolderName = document.getElementById("cardHolderName");
const cardHolerNameError = document.getElementById("cardHolerNameError");
const cardNum = document.getElementById("cardNum");
const cardHolderNumEror = document.getElementById("cardHolderNumEror");
const mounth = document.getElementById("mounth");
const year = document.getElementById("year");
const Error = document.getElementById("Error");

form.addEventListener("submit",(e) => {

    if(cardHolderName.value === ""){
        cardHolerNameError.innerHTML = "can't be blank";
        cardHolderName.style.borderColor = "red";
        e.preventDefault();

    }else{
        cardHolderName.style.borderColor = "green";
        e.preventDefault();
        cardHolerNameError.innerHTML = "";
    }

    if(cardNum.value === ""){
        cardHolderNumEror.innerHTML = "can't be blank";
        cardNum.style.borderColor = "red";

    }else{
        cardNum.style.borderColor = "green";
        cardHolderNumEror.innerHTML = "";
    }

    let notCardNumber = "9591 " +  " 6489 " + " 6389 " + " 101E";
    let ifStr =  cardNum.value;

    if(cardNum.value === notCardNumber || ifStr != NaN){
        cardHolderNumEror.innerHTML = "numbers only";
        cardNum.style.borderColor = "red";

    }else{
        cardNum.style.borderColor = "green";
        cardHolderNumEror.innerHTML = "";
    }

    if(mounth.value === ""){
        Error.innerHTML = "Can't be blank";
        mounth.style.borderColor = "red";

    }else if(year.value === ""){
        Error.innerHTML = "Can't be blank";
        year.style.borderColor = "red";
    }
    else {
        mounth.style.borderColor = "green";
        year.style.borderColor = "green";
    }
})
