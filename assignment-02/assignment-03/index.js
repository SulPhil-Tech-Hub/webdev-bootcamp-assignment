// collect first name
// collect second name
// perform addition
// return answer

// let operation = prompt('please an operation from [addition, subtraction, multiplication]')

// let firstNumber = prompt('Please enter first number')

// let secondNumber = prompt('Please enter second number')

// if(operation == "addition"){
//     sum = parseInt(firstNumber) + parseInt(secondNumber)
//     console.log(sum)
// }else if(operation == "subtraction"){
//     sub = parseInt(firstNumber)  - parseInt(secondNumber)
//     console.log(sub)
// }else if(operation == "multiplication"){
//     mult = parseInt(firstNumber)  * parseInt(secondNumber)
//     console.log(mult)
// }else{
//     console.log('invalid operation')
// }

let userName = prompt('please enter your username')

let users = ['john', 'james', 'fred', 'joy', 'gift']

let isUser = false;

function verifyUser(user){
    for(let item of users){
        if(item === user){
            isUser = true;
            break;
        }
    }
    
    if(isUser){
        console.log('welcome ' + user)
        return true;
    }else{
        console.log('invalid username')
        return false;
    }
}



function giftVerifiedUsersMoney(user){

    let isUserVerified = verifyUser(user)

    if(isUserVerified) {
        console.log("you have been credited with the sum of 50,000 naira")
    }else{
        console.log('You are an invalid user you now blocked')
    }
}

function sendLoginLinkToVerifiedUser(user){

    let isUserVerified = verifyUser(user)

    if(isUserVerified) {
        console.log("welcom you can follow this link to login 'www.Helloworld.com' ")
    }else{
        console.log('You are an invalid user you now blocked')
    }
}


giftVerifiedUsersMoney(userName)
sendLoginLinkToVerifiedUser(userName) 




