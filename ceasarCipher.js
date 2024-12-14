///creating a new javascript file to test ceasarCipher alone.



function ceasarCipher(word,shift){
    let aplhabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v", "w",
        "x","y","z"];
    // The string that will be returned, this ensures its re-written everytime the function is called.
    var newString = "";
    let isUpper = false;
    
    for (let i = 0; i < word.length; i++){
        //loops through each character
        let currentChar = word.charAt(i);
        
        // check if its an upper case character
        if (currentChar == currentChar.toUpperCase()){
            isUpper = true;
            //once found its upper case, convert it to lower case for future processing
            currentChar = currentChar.toLowerCase();
        }

        if ((aplhabet.indexOf(currentChar)) !== -1){
            // sets the current position, this will only happen if the if statement is passed
            let currentPosition = aplhabet.indexOf(currentChar);
            let newposition = currentPosition + shift;
            // checking that newposition does not exceed 26
            while (newposition > 26){
                newposition = newposition - 26;
            }
            currentChar = aplhabet[newposition];
            //checking if it was previously an upper case and convert it back
            if (isUpper == true){
                currentChar = currentChar.toUpperCase();
                isUpper = false;
                console.log(isUpper);
            }

            newString += currentChar;
        }
        else{
            newString += currentChar;
            isUpper = false;
            //just add it to the newString
        }


    }
    return newString;
}

module.exports = {ceasarCipher};