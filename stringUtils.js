import chalk, { chalkStderr } from "chalk";


console.log(chalk.bgMagentaBright("lets play with a string"));

const greetings = ["hey yall","Hola","hello","whats up doc?","bonjour"];

/**
 * 
 * @param {[string]} 
 * @returns {[string]} returns each greeting capitilized
 * 
 */
export function upperCaseGreetings(){
     greetings.forEach(greeting =>{
        console.log(greeting.toUpperCase() + " its a beautiful day in the neighborhood");
     })
    
}


export function lowerCaseGreetings(){
     greetings.forEach(greeting =>{
        console.log(greeting.toLowerCase() + " its a beautiful day in the neighborhood");
     })
    
}
    





