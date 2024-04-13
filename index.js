let button1El = document.getElementById("button1-el")
let button2El = document.getElementById("button2-el")


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePass(){
    let pass = ""
    for (let i = 0; i < 16; i++){
        pass+=characters[Math.floor(Math.random() * characters.length)]
    }
    return pass
}

function renderPass(){
    button1El.textContent = generatePass()
    button2El.textContent = generatePass()
    
    
}


