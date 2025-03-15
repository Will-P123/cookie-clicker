var points = 0;
var clickers = 0;
var price = 10;
document.querySelector("#addCookies").addEventListener("click", function(){
    points += 1;
    console.log(points);
    document.getElementById("myid").innerHTML = points.toString();
});
document.querySelector("#button").addEventListener("click", function(){
    if (points >= price) {
        points -= price;
        price = price*2;
        clickers++;
        document.querySelector("#button").innerText="Autoclicker: Costs "+price+" cookies."
    }
    setInterval(function(){
        points += clickers;
        document.getElementById("myid").innerHTML = points.toString();
    }, 1000);
});