// Retrieve Average Directional Movement Index indicator specifications
//

var Talib = require("./talibFunctions");

func = new Talib();
func.searchFunctionByTag("SMA");
console.log(func.outputTypes);
console.log(func.inputTypes);
