templateLiteral(){
    var user = document.getElementById("name").innerHTML ;

    document.getElementById("templateLiteral").innerHTML = `Hello ${user}, welcome to the world of JavaScript!`;
}