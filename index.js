import { mathPower, squareRooter } from "./mathUtils.js" 
import { randomGreeting } from "./stringUtils.js";
import chalk from "chalk";

console.log(chalk.bgCyanBright("index.js works :)"));

console.log(mathPower(4,4));
console.log(chalk.blueBright(squareRooter(79)));
console.log(randomGreeting[0])