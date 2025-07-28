import { mathPower, squareRooter } from "./mathUtils.js" 
import { upperCaseGreetings , lowerCaseGreetings } from "./stringUtils.js";
import chalk from "chalk";

console.log(chalk.bgCyanBright("index.js works :)"));



console.log(mathPower(4,4));
console.log(chalk.blueBright(squareRooter(79)));

upperCaseGreetings();
lowerCaseGreetings();