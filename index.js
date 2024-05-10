#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 99999;
let myPin = 24680;
let pinAns = await inquirer.prompt([
    { name: "pin", message: "Enter your pin?", type: "number" },
]);
if (pinAns.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt({
        name: "operator",
        message: "What do you want to do next?",
        type: "list",
        choices: ["deposit", "withdraw", "fastCash", "balance"],
    });
    if (operationAns.operator === "deposit") {
        let amountAns1 = await inquirer.prompt({
            name: "amount1",
            message: "Enter amount?",
            type: "number",
        });
        if (amountAns1.amount1 > 0) {
            myBalance += amountAns1.amount1;
            console.log(`Deposited $${amountAns1.amount1}. Your new balance is $${myBalance}.`);
        }
        else {
            console.log("Invalid deposit amount. Please enter a positive value.");
        }
    }
    else if (operationAns.operator === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter amount?",
            type: "number",
        });
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your current amount is $${myBalance}`);
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    }
    else if (operationAns.operator === "fastCash") {
        let amountAns2 = await inquirer.prompt({
            name: "amount2",
            message: "Select amount:",
            type: "list",
            choices: ["100", "500", "1000", "5000", "10000"],
        });
        if (parseInt(amountAns2.amount2) < myBalance) {
            myBalance -= parseInt(amountAns2.amount2);
            console.log(`Your current amount is $${myBalance}`);
        }
        else {
            console.log("Invalid withdrawal amount.");
        }
    }
    else {
        console.log(`Your balance is $${myBalance}`);
    }
}
else {
    console.log("Please enter the correct pin code.");
}
