console.log(typeof String);
console.log(typeof Object);
console.log(typeof Array);

String.prototype.reverse = function(){
    return this.split("").reverse().join("");
}

console.log("Renan".reverse());

Array.prototype.first = function(){
    return this[0];
}

console.log([1,2,3,4].first());