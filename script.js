var carbohydrates = [
    'Ugali',
    'Rice',
    'Chapati',
    'Matoke',
];

var proteins = [
    'Meat',
    'Beans',
    'Eggs',
    'Fish',
    'Matumbo',
    'Liver',
];

var vitamins = [
    'Kales',
    'Spinach',
    'Cabbage',
];

var fruits = [
    'Banana',
    'Orange',
    'Pineapple',
    'Apple',
    'Avocado',
];

function checkFood(name){
    var no = name.length;
    var randomNumber = Math.floor(Math.random() * no);

    return name[randomNumber];
}

var carbo = checkFood(carbohydrates);
var prot = checkFood(proteins);
var vits = checkFood(vitamins);

document.getElementById("ch").innerHTML = carbo;
document.getElementById("prtn").innerHTML = prot;
document.getElementById("vtmn").innerHTML = vits;
document.getElementById("frt").innerHTML = checkFood(fruits);

x = document.getElementById("btn")

