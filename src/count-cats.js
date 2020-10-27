const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let m = 0;
  for(let i = 0;i < matrix.length; i++) {
      let d = matrix[i];
      for(let j = 0; j <d.length; j++) {
          if (d[j] =='^^') m++;
      }
  }
return m;
};
