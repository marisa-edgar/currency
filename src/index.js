import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from "./js/currency.js";

$(document).ready(function() {
  $('#currencyConvert').click(function() {
    const number = $("#number").val();
    $('#currencyConvert').val("");

    let promise = CurrencyService.getCurrency();
    promise.then(function(response) {
      const body =JSON.parse(response);
      const currencyConvert = new CurrencyService.converter(body, number);

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