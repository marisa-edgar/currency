import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency.js";


$(document).ready(function() {
  $("#currencyConvert").click(function() {
    const number = $("#number").val();
    const currency = $("#currency").val();
    $('#currencyConvert').val("");
    let promise = CurrencyService.getCurrency(currency, number);
    promise.then(function(response) {
    const body = JSON.parse(response);
    if (body.conversion_rate) {
      $("showCurrency").html(`${number} USD, would be ${body.conversion_rate} in ${currency}`);
    } else {
      $('.showErrors').text(`There was an error processing you request: ${response}`);
    }
  })
  });
});
