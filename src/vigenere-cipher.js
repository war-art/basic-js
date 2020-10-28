const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let pos = 0;
    let result = message.map( el => {
      if (this.alpha.includes(el)) {
        let idx = (this.alpha.indexOf(keys[pos]) + this.alpha.indexOf(el)) % this.alpha.length;
        pos = ++pos % keys.length;
        return this.alpha[idx];
      }
      return el;
    } );
    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(msg, key) {
    const message = [...msg.toUpperCase()];
    const keys = [...key.toUpperCase()];
    let pos = 0;
    let result = message.map( el => {
      if (this.alpha.includes(el)) {
        let idx = this.alpha.indexOf(el) - this.alpha.indexOf(keys[pos]);
        if (idx < 0) idx += this.alpha.length;
        pos = ++pos % keys.length;
        return this.alpha[idx];
      }
      return el;
    } );
    return this.mode ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
