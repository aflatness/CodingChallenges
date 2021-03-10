// Hill Cipher

const HillCipher = function () {
  this.encrpyt = (key, str) => {
    const code = str.split('').map(v => v.charCodeAt(0) - 97);
    const inverted = key.map((v, i) => {
      return key[i].reduce((m, keyV, keyI) => {
        return m += keyV * code[keyI]
      }, 0)
    });
    return inverted.reduce((m, v) => {
      return m += String.fromCharCode(v % 26 + 97)
    }, '');
  }

  // this.decrypt = (key, str) => {
  //   const code = str.split('').map(v => v.charCodeAt(0) - 97);
  //   const determinate = this.determinate(key);
  //   // console.log(determinate);
  // }

  this.determinate = function (m) {
    if (m.length === 2) {
      return m[0][0] * m[1][1] - m[1][0] * m[0][1];
    }
    return m.reduce((mem, v, i) => {
      return mem += Math.pow(-1, i) * m[0][i] * this.determinate(m.slice(1).map((v) => {
        return v.filter((val, ind) => ind !== i);
      }))
    }, 0);
  }
}