

function captialize(word){
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

function reverseString(word){
 return word.split("").reverse().join("");
}

let calculator = {
    add(a,b){
        return (a+b);
    },

    subtract(a,b){
        return (a-b);
    },

    divide(a,b){
        if (b === 0){
            return ("Cannot divide by zero")
        }
        else{
            return (a/b);
        }
    },
    
    multiply(a,b){
        return (a*b);
    },
}

function caesarCipher(word,shift){
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    splitArray = word.split();
    let newWord = [];
    let isUpper = false;



    for(let i = 0; i < splitArray.length; i++){
        let checkword = splitArray[i];
        if (checkword === checkword.toUpperCase()){
            isUpper = true;
            checkword = checkword.toLowerCase();
        }
        if ((alphabet.indexOf(checkword)) != -1){
            let oldindex = alphabet.indexOf(checkword);
            let newindex = oldindex + shift
            while(newindex > 26){
                newindex = newindex - 26;
            }
            if(isUpper === true){
                newLetter = (alphabet[newindex].toUpperCase());
                newWord.push(newLetter);
                isUpper = false;
            }else{
                newLetter = (alphabet[newindex]);
                newWord.push(newLetter);
            }
        }
    }
    return newWord;
}

module.exports = {captialize, reverseString, calculator, caesarCipher};