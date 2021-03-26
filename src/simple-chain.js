const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result : [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position === "number" && 0 < position <= this.getLength()) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw "Error position";
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    output = this.result.join("~~");
    this.result = [];
    return output;
  },
};

module.exports = chainMaker;
