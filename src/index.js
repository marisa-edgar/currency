import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency.js";


function converter(body, number, currency) {
  const ALL = parseFloat(body[0].price);
  const AMD = parseFloat(body[1].price);
  const AZN = parseFloat(body[2].price);
  const BYN = parseFloat(body[3].price);
  const BAM = parseFloat(body[4].price);
  const BGN = parseFloat(body[5].price);
  const HRK = parseFloat(body[6].price);
  const CZK = parseFloat(body[7].price);
  const DKK = parseFloat(body[8].price);
  const GEL = parseFloat(body[9].price);
  const HUF = parseFloat(body[10].price);
  const ISK = parseFloat(body[11].price);
  const CHF = parseFloat(body[12].price);
  const MDL = parseFloat(body[13].price);
  const MKD = parseFloat(body[14].price);
  const NOK = parseFloat(body[15].price);
  const PLN = parseFloat(body[16].price);
  const RON = parseFloat(body[17].price);
  const RUB = parseFloat(body[18].price);
  const RSD = parseFloat(body[19].price);
  const SEK = parseFloat(body[20].price);
  const TRY = parseFloat(body[21].price);
  const UAH = parseFloat(body[22].price);
  const GBP = parseFloat(body[23].price);
  const EUR = parseFloat(body[24].price);
  if (currency === "ALL"){
    return number/ALL;
  }
  else if (currency === "AMD"){
    return number/AMD;
  }
  else if(currency === "AZN"){
    return number/AZN;
  }
  else  {
    alert("error, incorrect currency chosen");
  }
}

$(document).ready(function() {
  let promise = CurrencyService.getCurrency("&rank&per-page=3");
  promise.then(function(response) {
    const body = JSON.parse(response);
    $("#rank1").text(`${body[0].name}`);
    $("#rank2").text(`${body[1].name}`);
    $("#rank3").text(`${body[2].name}`);
    let icon1Url = body[0].logo_url;
    $('#showIcon1').attr('src', icon1Url);
    let icon2Url = body[1].logo_url;
    $('#showIcon2').attr('src', icon2Url);
    let icon3Url = body[2].logo_url;
    $('#showIcon3').attr('src', icon3Url);
  })
  $("#currencyConvert").click(function() {
    const number = $("#number").val();
    $('#currencyConvert').val("");

    let promise = CurrencyService.getCurrency();
    promise.then( function(response) {
      const body = JSON.parse(response);
      let currencyConvert = new CurrencyService.converter(body, number);
      let currency = [];

      let Currency = [];
      for (let i = 0; i < body.length; i++) {
        $('.showCurrency').html(Currency);
        $('.showConverter').html(currencyConvert);
      }
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
