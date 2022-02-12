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
      $(".showCurrency").html(`${number} USD, would be ${body.conversion_result} ${currency} at a rate of ${body.conversion_rate}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing you request: ${error}`);
    });
  });
});
