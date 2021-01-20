
// var family = ['Lea', 'Avner', 40, child, true]

var Fruits = ["Banana","Apple","Oranges","Blueberries"];
Fruits.shift();
Fruits.sort();
Fruits.push("Kiwi");
Fruits.splice(0,1);
Fruits.reverse();

console.log(Fruits);

var morefruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(morefruits[1][1][0]);