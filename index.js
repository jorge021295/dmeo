function firts(a, b, c, d){
    let object = new Object();
    if(a){object.a=true;}
    if(b){object.b=true;}
    if(c){object.c=true;}
    if(d){object.d=true;}
    console.log(object)
    return object;
}

function inverts(string){
    let newString = "";
    for(let i = string.length-1; i >= 0; i--){
        newString += string[i];
    }
    console.log(newString)
    return newString;
}