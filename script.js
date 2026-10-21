const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currency-select");

function convertValue() {
    const valueInput = Number(document.querySelector(".value-input").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");


    console.log(currencySelect.value);
    const dolarToday = 5.2;
    const euroToday = 5.5;
    const libraToday = 6.2;
    const bitcoinToday = 100000;


    if (currencySelect.value === "USD") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInput / dolarToday);
    }

    if (currencySelect.value === "EUR") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInput / euroToday);
    }

    if (currencySelect.value === "GBP") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInput / libraToday);
    }
        
    if (currencySelect.value === "BTC") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valueInput / bitcoinToday);    
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valueInput);

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");
    
    if (currencySelect.value === "USD") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/estados-unidos (1) 1.png";
    }
    if (currencySelect.value === "EUR") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro 1.png";
    }
    if (currencySelect.value === "GBP") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra 1.png";
    }
    if (currencySelect.value === "BTC") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin 1.png";
    }

    convertValue();
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);