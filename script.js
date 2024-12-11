

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
        return (a/b);
    },
    
    multiply(a,b){
        return (a*b);
    },
}

module.exports = {captialize, reverseString, calculator};