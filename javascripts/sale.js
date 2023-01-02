const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];


function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  var texte = priceElement.options[priceElement.selectedIndex].text;
  let purchase = {
    price: price,
    number: number,
    texte: texte,
  };
  const newPurchase = purchases.findIndex((item) => item.price === purchase.price) // --1
  if(purchases.length < 1 || newPurchase === -1) { //--2
    purchases.push(purchase);
  } else {
    purchases[newPurchase].number += purchase.number; //--3
  }
  window.alert(`${display()}\nSous-total ${subtotal()} Yens`);
  priceElement.value = "";
  numberElement.value = "";
}

function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].texte} ,Vous avez choisi ${purchases[i].number} lots\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`La somme est de ${sum} Yens, les frais d'expédition sont de ${postage} Yens.\n Total ${sum + postage} Yens.`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000){
   return 500;
  } else {
   return 250;
  }
}