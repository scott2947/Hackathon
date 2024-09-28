window.onload = function() {
    let randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
    let quotes = [
        "Champions keep playing until they get it right", 
        "Give light and people will find the way", 
        "Believe you can and you're halfway there", 
        "Try to be a rainbow in someone's cloud", 
        "It always seems impossible until it's done",
    ];
    document.getElementById("mquote").innerHTML = quotes[randNum];
}