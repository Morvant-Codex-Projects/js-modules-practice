import chalk, { chalkStderr } from "chalk";

console.log(chalk.bgMagentaBright("lets find a random object from a string"));

const greetings = ["hey yall","Hola","hello","whats up doc?","bonjour"];

export function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase());