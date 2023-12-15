// Retrieve Average Directional Movement Index indicator specifications
//

var talib = require("./node_modules/talib/build/Release/talib");
var functions = talib.functions;
const items = [];
for (i in functions) {
  const name = functions[i].name;
  // if (name == "VIDYA") {
  // if (name == "ZLEMA") {
  if (name == "MAVP") {
    console.log(functions[i]);
  }
}

//
// let inputs = [];
// let outputs = [];
//
// for (i in functions) {
//   const curr = functions[i];
//   items.push({ tag: curr.name, group: curr.group, description: curr.hint, inputs: curr.inputs, optInputs: curr.optInputs, outputs: curr.outputs });
//   // console.log(functions[i].name);
//   // console.log(functions[i].inputs);
//   functions[i].inputs.map((input) => {
//     // console.log(input.name);
//     if (input.name == "inPeriods") {
//       console.log(functions[i]);
//     }
//     inputs.push(input.name);
//   });
//   functions[i].outputs.map((output) => {
//     // console.log(input.name);
//     outputs.push(output.name);
//   });
// }
//
// outputs = outputs.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
//
// inputs = inputs.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
//
// // console.log(outputs);
// // console.log(inputs);
