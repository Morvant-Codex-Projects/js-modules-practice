import chalk from "chalk";

console.log("lets do the math!");



export function mathPower(a,b) {
    return Math.pow(a,b);
}

console.log(mathPower(4,2));

export function squareRooter(number) {
    return Math.sqrt(number);
}

console.log(chalk.blue(squareRooter(123)));