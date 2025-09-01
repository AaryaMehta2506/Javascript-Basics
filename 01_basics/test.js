// console.log("hello")

// to declare constant (constant means the things cant be changed or we can say unique key)
const accountID = 144553
// it serves space for the value (like eg: we can say it make column for the value) but it can be change like now it is aarya@google.com than i can edit to 123@
let accountEmail = "aarya@google.com"
// for variable we can use let n var (both working are same) but USE LET AVOID USING VAR
var accountPassword = "12345"
/*
Prefer not to use VAR bcoz of issue in block scope and functional scope
Use LET only
*/
//this is also type of var where we can write like this also
accountCity = "Jaipur"
//
let accountState; //it is not defined so output will be undefined

accountId = 2    // not allowed (means this will not print anything means its wrong method)
accountEmail = "abc@yahoo.com"
accountPassword = "88888"
accountCity = "Vadodara"


//console.log(accountID); 
//output : 144553 (bcoz we have used const where the value is 144553 so it will print 144553 not 2)

// to get output together (means again n again we dont need to type same think)
//console.log([accountID, accountEmail, accountPassword, accountCity])
//output : [ 144553, 'abc@yahoo.com', '88888', 'Vadodara']

console.log([accountID, accountEmail, accountPassword, accountCity, accountState])
//output : [ 144553, 'abc@yahoo.com', '88888', 'Vadodara', undefined ]

