function templateLiteral(){
    var user = document.getElementById("name").value ;

    document.getElementById("templateLiterals").innerHTML = `<h1>Hello ${user}, welcome to the world of JavaScript!</h1>`;
}
console.log("hello world")