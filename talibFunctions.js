var talib = require("./node_modules/talib/build/Release/talib");

class Talib {
  constructor() {
    this.createFunctions();
    this.createInputOutputTypes();
  }
  createFunctions() {
    var functions = talib.functions;
    let items = [];

    for (var i in functions) {
      const curr = functions[i];
      items.push({
        tag: curr.name,
        group: curr.group,
        description: curr.hint,
        inputs: curr.inputs,
        optInputs: curr.optInputs,
        outputs: curr.outputs,
      });
    }
    this.functions = items;
  }

  createInputOutputTypes() {
    let inputs = [];
    let outputs = [];
    this.functions.map((func) => {
      func.inputs.map((input) => {
        inputs.push(input.name);
      });
      func.outputs.map((output) => {
        // console.log(input.name);
        outputs.push(output.name);
      });
    });
    outputs = outputs.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    inputs = inputs.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });

    this.outputTypes = outputs;
    this.inputTypes = inputs;
  }

  searchFunctionByTag(name) {
    this.functions.map((curr) => {
      if (curr.tag == name) {
        console.log(name);
        console.log(curr);
      }
    });
  }
}

module.exports = Talib;
