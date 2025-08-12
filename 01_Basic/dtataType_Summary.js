// DataType = 2 type
// primitive & Non Primitive


// Primitive = String, Number, BigInt, null, boolean, undefine, symble

const myName = "Raktim" //TypeOf=String
const Age = 26 //TypeOf=Number
const bigNumber = 11225556622225855n //TypeOf=BigInt
const email = null //TypeOf=object***
let isLoggedIn = true;// TypeOf = boolean
let hasPermission = false;// TypeOf = boolean
let isHeCome;


// Refarence(Non Primitive) = array,object,Function

const myFamilyMember = ["baba","ma","vai","bon"] //arry JavaScript-এ Array আসলে special type of object।

//তাই typeof myFamilyMember দিলে আউটপুট হবে "object"।

//কিন্তু এটা যে আসলেই Array তা চেক করার সঠিক উপায় হলো:  console.log(Array.isArray(myFamilyMember))

const myBiodata = {
    name:"Raktim",
    age:26,
    weight:69,
    height:5.8,
    hraiStyle:"Black"

} // object

const myFunction = function () {
    console.log("Hellow World");
    
}

console.log(typeof myFunction);

console.log(Array.isArray(myFamilyMember))