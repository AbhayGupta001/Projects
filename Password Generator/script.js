const pwdDisplay = document.querySelector("[pwd-display]"); 
const inputSlider = document.querySelector("[length-slider]");
const lengthDisplay = document.querySelector("[display-len]");
const lowerCheck = document.querySelector("#lowercase");
const upperCheck = document.querySelector("#uppercase");
const numberCheck = document.querySelector("#number");
const symbolCheck = document.querySelector("#symbol");
const inputCheck = document.querySelectorAll("input[type=checkbox]")
const generateButton = document.querySelector(".generate-btn");
const copyButton = document.querySelector(".copy-btn");
const copyMessage = document.querySelector(".copy-message");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


let password = "";
let passwordLength = 10;
let checkCount = 1;

handleSlider();

//for Setting the password length
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;
}

//generating random variables number between a range
function generateRndValue(min, max){
    return Math.floor((max-min)*Math.random() + min);
}

function getRndInteger(){
    return generateRndValue(0,9);
}
function getRndLowercase(){
    return String.fromCharCode(generateRndValue(97,114));
}
function getRndUppercase(){
    return String.fromCharCode(generateRndValue(65,92));
}
function getRndSymbol(){
    // return symbols[generateRndValue(0,symbols.length)];
    return symbols.charAt(generateRndValue(0,symbols.length));
}

inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
});

function updateCheckCount(){
    checkCount=0;
    inputCheck.forEach((checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

inputCheck.forEach((checkbox) => {
    checkbox.addEventListener('change',updateCheckCount);
});

function shufflePassword(array){
    for(let i=passwordLength; i>0; i--){
        //random value from 0 to i will be generated
        let j = Math.floor(Math.random()*i+1);
        // now will swap this jth char with ith char
        const temp = array[i];
        array[i] = array[j];
        array[j] = array[i];
    }
    let str="";
    array.forEach((char)=> str+= char)
    return str;
}

function setStrength(){
    if(lowerCheck.checked){
        
    }
}

function generatePassword(){
    console.log('generate password called')
    password="";
    if(passwordLength < checkCount){
        passwordLength = checkCount;
    }

    let funcArr = []

    if(lowerCheck.checked){
        password += getRndLowercase();
        funcArr.push(getRndLowercase);
    }
    
    if(upperCheck.checked){
        password += getRndUppercase();
        funcArr.push(getRndUppercase);
    }
    
    if(symbolCheck.checked){
        password += getRndSymbol();
        funcArr.push(getRndSymbol);
    }

    if(numberCheck.checked){
        password += getRndInteger();
        funcArr.push(getRndInteger);
    }

    for(let i=0; i < (passwordLength-checkCount); i++){
        let randIndex = generateRndValue(0,funcArr.length);
        password += funcArr[randIndex]();
    }
    console.log(password)
    password = shufflePassword(Array.from(password));
    pwdDisplay.value = password;
}

async function copyContent(){
    console.log('In copy function');
    
    try{  
        await navigator.clipboard.writeText(pwdDisplay.value);
        copyMessage.innerText = 'copied';
    }  
    catch(e){
        copyMessage.innerText = 'failed';
    }
    
    copyMessage.classList.add('active');
    console.log('copied');
    setTimeout(()=>{
        copyMessage.classList.remove('active');
    },2000)
    console.log('disappeared');
}

generateButton.addEventListener('click',generatePassword);

copyButton.addEventListener('click',()=>{
    if(pwdDisplay.value)
        copyContent()
});
