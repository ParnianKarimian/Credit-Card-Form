const form = document.querySelector('#credit-card')

const cardNumber = document.querySelector('#card-number')
const cardHolder = document.querySelector('#name-text')
const cardExpiration = document.querySelector('#Valid-thru-text')
const cardCVV = document.querySelector('#cvv-text')

const cardNumberText = document.querySelector('.number-vl')
const cardHolderText = document.querySelector('.name-vl')
const cardExpirationText = document.querySelector('.expiration-vl')
const cardCVVText = document.querySelector('.cvv-vl')

// match card num with input
cardNumber.addEventListener('keyup', (e) => {
    if (!e.target.value) {
        cardNumberText.innerText = '1234 5678 9101 1123';
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ","");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else{
            cardNumberText.innerHTML = valuesOfInput
        }
    }
})



// match card holder name with input
cardHolder.addEventListener("keyup", (e)=> {
    if (!e.target.value) {
        cardHolderText.innerHTML = "Parnian Karimian";
    }else{
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
})


// match card Expiration with input
cardExpiration.addEventListener('keyup', (e) => { 
    console.log(cardExpiration);
    
    if (!e.target.value) {
        cardExpirationText.innerHTML = "05/20";

    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if (e.target.value.length > 2) {
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
    // console.log({cardExpirationText});
})


// match card cvv with input
cardCVV.addEventListener('keyup', (e)=>{
    if (!e.target.value) {
        cardCVVText.innerHTML = '123';
    } else {
        cardCVVText.innerHTML = e.target.value;
    }
})


// form submit
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    alert("Card Added Successfully!");
})
