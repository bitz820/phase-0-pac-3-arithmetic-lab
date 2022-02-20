function add (a, b){
    return a+ b;
};

function subtract (a, b){
    return a - b;
};

function multiply (a, b){
    return a*b;
};

function divide (a, b){
    return a/b;
};

function increment(n){
    n+= 1;
    return n
};

function decrement(n){
    n-= 1;
    return n
};

function makeInt(string){
    let number = parseInt(string, 10);
    // console.log(string);
    // console.log(parseInt(string, 10))
    return number
};

function preserveDecimal(string){
    let num = parseFloat(string);
    return num
}
