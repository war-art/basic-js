const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
	this.arrChain.push(value);
    return this;
  },
  removeLink(position) {
	if(typeof(position) !== 'number' || position < 1 || position > this.arrChain.length - 1) {
		this.arrChain = [];
		throw new Error;
	} else {
		this.arrChain.splice(position - 1, 1);
		return this;
	}
  },
  reverseChain() {
	this.arrChain.reverse();
    return this;
  },
  finishChain() {
    let temp = this.arrChain.map(e => '( ' + e + ' )').join('~~');
	this.arrChain = [];
	return temp;
  }
};

module.exports = chainMaker;
