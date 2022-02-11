import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency.js";


// function converter(body, number, currency) {
//   const ALL = parseFloat(body[0].price);
//   const AMD = parseFloat(body[1].price);
//   const AZN = parseFloat(body[2].price);
//   const BYN = parseFloat(body[3].price);
//   const BAM = parseFloat(body[4].price);
//   const BGN = parseFloat(body[5].price);
//   const HRK = parseFloat(body[6].price);
//   const CZK = parseFloat(body[7].price);
//   const DKK = parseFloat(body[8].price);
//   const GEL = parseFloat(body[9].price);
//   const HUF = parseFloat(body[10].price);
//   const ISK = parseFloat(body[11].price);
//   const CHF = parseFloat(body[12].price);
//   const MDL = parseFloat(body[13].price);
//   const MKD = parseFloat(body[14].price);
//   const NOK = parseFloat(body[15].price);
//   const PLN = parseFloat(body[16].price);
//   const RON = parseFloat(body[17].price);
//   const RUB = parseFloat(body[18].price);
//   const RSD = parseFloat(body[19].price);
//   const SEK = parseFloat(body[20].price);
//   const TRY = parseFloat(body[21].price);
//   const UAH = parseFloat(body[22].price);
//   const GBP = parseFloat(body[23].price);
//   const EUR = parseFloat(body[24].price);
  if (currency === "ALL"){
    return number/ALL;
  } else if (currency === "AMD"){
    return number/AMD;
  } else if(currency === "AZN"){
    return number/AZN;
  } else if(currency === "BYN"){
    return number/BYN;
  } else if(currency === "BAM"){
    return number/BAM;
  } else if(currency === "BGN"){
    return number/BGN;
  } else if(currency === "HRK"){
    return number/HRK;
  } else if(currency === "CZK"){
    return number/CZK;
  } else if(currency === "DKK"){
    return number/DKK;
  } else if(currency === "GEL"){
    return number/GEL;
  } else if(currency === "HUF"){
    return number/HUF;
  } else if(currency === "ISK"){
    return number/ISK;
  } else if(currency === "CHF"){
    return number/CHF;
  } else if (currency === "MDL"){
    return number/MDL;
  } else if(currency === "MKD"){
    return number/MKD;
  } else if(currency === "NOK"){
    return number/NOK;
  } else if(currency === "PLN"){
    return number/PLN;
  } else if(currency === "RON"){
    return number/RON;
  } else if(currency === "RUB"){
    return number/RUB;
  } else if(currency === "RSD"){
    return number/RSD;
  } else if(currency === "SEK"){
    return number/SEK;
  } else if(currency === "TRY"){
    return number/TRY;
  } else if(currency === "UAH"){
    return number/UAH;
  } else if(currency === "GBP"){
    return number/GBP;
  } else if(currency === "EUR"){
    return number/EUR;
  } else  {
    alert("error, incorrect currency chosen");
  }


$(document).ready(function() {
  let promise = CurrencyService.getCurrency();
  promise.then(function(response) {
    const body = JSON.parse(response);
  })
  $("#currencyConvert").click(function() {
    const number = $("#number").val();
    $('#currencyConvert').val("");
      let Currency = [];
      for (let i = 0; i < body.length; i++) {
        $('.showCurrency').html(Currency);
        $('.showConverter').html(currencyConvert);
      }
    }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});
