#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
let myPin = 1234;
console.log(chalk.blue("\n\t Welcome to Farida - ATM Machine \n\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code :")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n pin is correct , login successfully!\n"));
    // console.log(`current account balance is $ { myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select on operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if ("operationAns.operation === withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawa1 method :",
                choices: ["fast cash", "enter amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount :",
                    choices: [1000, 2000, 5000, 10000, 20000, 5000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficient balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(` your remaining balance is : ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "enter amount") {
        }
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw :"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red("Insufficient balance"));
        }
        else {
            myBalance -= amountAns.amount;
        }
        console.log(`${amountAns.amount}withdraw successfully`);
        console.log(`Your remaning balanec is : ${myBalance}`);
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your account balance is :${myBalance}`);
    }
    else {
        console.log(chalk.red("\n\t pin is incorrect try again!\n"));
    }
}
