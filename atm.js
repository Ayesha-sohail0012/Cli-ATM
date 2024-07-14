#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.Pin === mypin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountANS = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            }
        ]);
        if (amountANS.amount > myBalance) {
            console.log("Insufficient balance");
        }
        // = += -+
        else {
            myBalance -= amountANS.amount;
            console.log(`Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount which you withdraw",
                type: "list",
                choices: [1000, 2000, 8000, 10000]
            }
        ]);
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdraw ${fast.fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
