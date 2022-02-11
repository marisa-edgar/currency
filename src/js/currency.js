export default class CurrencyService {
  static getCurrency() {
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload =function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  

//     if ( number !== 0) {
//       convertArr.push(`USD to ALL : ${number/ALL}<br>`);
//       convertArr.push(`USD to AMD : ${number/AMD}<br>`);
//       convertArr.push(`USD to AZN : ${number/AZN}<br>`);
//       convertArr.push(`USD to BYN : ${number/BYN}<br>`);
//       convertArr.push(`USD to BAM : ${number/BAM}<br>`);
//       convertArr.push(`USD to BGN : ${number/BGN}<br>`);
//       convertArr.push(`USD to HRK : ${number/HRK}<br>`);
//       convertArr.push(`USD to CZK : ${number/CZK}<br>`);
//       convertArr.push(`USD to DKK : ${number/DKK}<br>`);
//       convertArr.push(`USD to GEL : ${number/GEL}<br>`);
//       convertArr.push(`USD to HUF : ${number/HUF}<br>`);
//       convertArr.push(`USD to ISK : ${number/ISK}<br>`);
//       convertArr.push(`USD to CHF : ${number/CHF}<br>`);
//       convertArr.push(`USD to MDL : ${number/MDL}<br>`);
//       convertArr.push(`USD to MKD : ${number/MKD}<br>`);
//       convertArr.push(`USD to NOK : ${number/NOK}<br>`);
//       convertArr.push(`USD to PLN : ${number/PLN}<br>`);
//       convertArr.push(`USD to RON : ${number/RON}<br>`);
//       convertArr.push(`USD to RUB : ${number/RUB}<br>`);
//       convertArr.push(`USD to RSD : ${number/RSD}<br>`);
//       convertArr.push(`USD to SEK : ${number/SEK}<br>`);
//       convertArr.push(`USD to TRY : ${number/TRY}<br>`);
//       convertArr.push(`USD to UAH : ${number/UAH}<br>`);
//       convertArr.push(`USD to GBP : ${number/GBP}<br>`);
//       convertArr.push(`USD to EUR : ${number/EUR}<br>`);
//     } else {
//       return 0;
//     }
//     return convertArr;
//   }
// }