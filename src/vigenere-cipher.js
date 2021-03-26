const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(str, code) {
    [str, code] = this._validation(str, code);
    let strArray = this._getCodeArray(str);
    let codeArray = this._getCodeArray(code);
    let result = [];
    let countLetter = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] > 64 && strArray[i] < 91) {
        let numberLetter =
          (strArray[i] - 65 + codeArray[countLetter % codeArray.length] - 65) %
          26;
        result.push(String.fromCharCode(numberLetter + 65));
        countLetter++;
      } else {
        result.push(String.fromCharCode(strArray[i]));
      }
    }
    return this.direct ? result.join("") : result.reverse().join("");
  }
  decrypt(str, code) {
    [str, code] = this._validation(str, code);
    let strArray = this._getCodeArray(str);
    let codeArray = this._getCodeArray(code);
    let result = [];
    let countLetter = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i] > 64 && strArray[i] < 91) {
        let numberLetter =
          (strArray[i] -
            65 -
            (codeArray[countLetter % codeArray.length] - 65) +
            26) %
          26;
        result.push(String.fromCharCode(numberLetter + 65));
        countLetter++;
      } else {
        result.push(String.fromCharCode(strArray[i]));
      }
    }
    return this.direct ? result.join("") : result.reverse().join("");
  }
  _validation(str, code) {
    if (typeof str !== "string" || typeof code !== "string") {
      throw "Error type";
    } else {
      return [str.toUpperCase(), code.toUpperCase()];
    }
  }
  _getCodeArray(str) {
    return str.split("").map((s) => s.charCodeAt());
  }
}

module.exports = VigenereCipheringMachine;
