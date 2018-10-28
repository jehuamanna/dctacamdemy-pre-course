function arithematic(a, b, operator){
    if(operator === "add")
        return a+b;
    else if(operator === "subtract")
        return a-b;
    else if(operator ==="multiply")
        return a*b;
    else if(operator==="divide")
        return a/b;
}
console.log(arithematic(2,3,"divide"));