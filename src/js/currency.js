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
  converter(body,number) {
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
    let convertArr =[];

    if ( number !== 0) {
      convertArr.push(`USD to ALL : ${number/ALL}<br>`);
      convertArr.push(`USD to AMD : ${number/AMD}<br>`);
      convertArr.push(`USD to AZN : ${number/AZN}<br>`);
      convertArr.push(`USD to BYN : ${number/BYN}<br>`);
      convertArr.push(`USD to BAM : ${number/BAM}<br>`);
      convertArr.push(`USD to BGN : ${number/BGN}<br>`);
      convertArr.push(`USD to HRK : ${number/HRK}<br>`);
      convertArr.push(`USD to CZK : ${number/CZK}<br>`);
      convertArr.push(`USD to DKK : ${number/DKK}<br>`);
      convertArr.push(`USD to GEL : ${number/GEL}<br>`);
      convertArr.push(`USD to HUF : ${number/HUF}<br>`);
      convertArr.push(`USD to ISK : ${number/ISK}<br>`);
      convertArr.push(`USD to CHF : ${number/CHF}<br>`);
      convertArr.push(`USD to MDL : ${number/MDL}<br>`);
      convertArr.push(`USD to MKD : ${number/MKD}<br>`);
      convertArr.push(`USD to NOK : ${number/NOK}<br>`);
      convertArr.push(`USD to PLN : ${number/PLN}<br>`);
      convertArr.push(`USD to RON : ${number/RON}<br>`);
      convertArr.push(`USD to RUB : ${number/RUB}<br>`);
      convertArr.push(`USD to RSD : ${number/RSD}<br>`);
      convertArr.push(`USD to SEK : ${number/SEK}<br>`);
      convertArr.push(`USD to TRY : ${number/TRY}<br>`);
      convertArr.push(`USD to UAH : ${number/UAH}<br>`);
      convertArr.push(`USD to GBP : ${number/GBP}<br>`);
      convertArr.push(`USD to EUR : ${number/EUR}<br>`);
    } else {
      return 0;
    }
    return convertArr;
  }
}