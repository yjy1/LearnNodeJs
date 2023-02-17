// import moduleA from "./module/moduleA.js";
const moduleA  = require("./module/moduleA.js")
import {moduleB} from "./module/moduleB.js";
console.log(moduleA.getName())
console.log(moduleB.getName())