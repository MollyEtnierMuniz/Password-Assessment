//constraints are at least 10 characters long, contains one letter and one number
//console log success or failure message

let password = 'mm2*6mmmmm2'

let charOfPwd = password.split('')

// forbidden words and characters section
if (password.includes("password"))
    console.log("Please chose a password that doesn't use the word 'password.'");
else if (password.includes("Password"))
    console.log("Please chose a password that doesn't use the word 'Password.'");
else if (password.includes("letmein"))
    console.log("Please chose a less obvious password.'") 

if (charOfPwd.includes (" ")){
        console.log ("Please create a password without a space.")
    }

// length of password section
for (i=0; i < password.length-1; i++);

if (password.length <= 10) {
    console.log ('Please create a password with at least 10 characters.')
  } else if (password.length > 20) {
    console.log ('Woah, Tiger! Please chose a password with 20 or fewer characters.')
  } else {
    console.log ('Your password is a good length.')
 } 


// Requiring a number section. 
// I've spent hours failing to understand NaN, so here's what I came up with. (Agony.)
// I realize my code does not require a letter. I would love to learn how to do that. 
 if (charOfPwd.includes("1")){ 
   
 } else if (charOfPwd.includes("2"))
    {
} else if (charOfPwd.includes("3"))
   {
} else if (charOfPwd.includes("4"))
  { 
}else if (charOfPwd.includes("5"))
  {  
}else if (charOfPwd.includes("6"))
   { 
} else if (charOfPwd.includes("7"))
    {
} else if (charOfPwd.includes("8"))
  {
} else if (charOfPwd.includes("9"))
    {
}else if (charOfPwd.includes("0"))
    {
} else { 
    console.log ("Your password needs a number.") 
    }

// requring a special character section. 
//I can't get these next lines to work so I'm going to do it the kludgy way, see below and cry with me. 

// let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
// for (i=0; i< specialCharacters.length; i++)
// if (charOfPwd.includes (specialCharacters[i])) {    
//     console.log ("Good! Your password has a special character.")
// }

if (charOfPwd.includes("!")){ 
   
} else if (charOfPwd.includes("@"))
   {
} else if (charOfPwd.includes("#"))
  {
} else if (charOfPwd.includes("$"))
 { 
}else if (charOfPwd.includes("%"))
 {  
}else if (charOfPwd.includes("^"))
  { 
} else if (charOfPwd.includes("&"))
   {
} else if (charOfPwd.includes("*"))
   {
} else {     console.log ("Your password needs a special character from this list: !@#$%^&*") 
}

// I'm attempting the word art but it imported many "problems" that I don't understand.
//I'm going to comment it out so everything else will run. 

// if (password.length >= 10 && password.length <=20) {
//     console.log 

//     ______                __   ____                                          __
//    / ____/___  ____  ____/ /  / __ \____ ____________      ______  _________/ /
//   / / __/ __ \/ __ \/ __  /  / /_/ / __ `/ ___/ ___/ | /| / / __ \/ ___/ __  / 
//  / /_/ / /_/ / /_/ / /_/ /  / ____/ /_/ (__  |__  )| |/ |/ / /_/ / /  / /_/ /  
//  \____/\____/\____/\__,_/  /_/    \__,_/____/____/ |__/|__/\____/_/   \__,_/   
                                                                               
 
// }
