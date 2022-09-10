// coeur

let coeur = document.querySelectorAll(".fa-heart");

let btnplus = document.querySelectorAll(".plus-btn");

let btnmoins = document.querySelectorAll(".minus-btn");

let number = document.querySelectorAll(".Quant");

let deletecard = document.querySelectorAll(".delete");

let Item = document.querySelectorAll(".Item");

let finalPrice = document.querySelector("#finalPrice");

for (let i = 0; i < coeur.length; i++) {
  coeur[i].addEventListener("click", function () {
    if (coeur[i].style.color === "rgb(226, 192, 209)") {
      coeur[i].style.color = "red";
    } else {
      coeur[i].style.color = "rgb(226, 192, 209)";
    }
  });
}

//  incrementer/decrementer la quantité des article

// button plus

for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    number[i].value = Number(number[i].value) + 1;
    sum()
  });
}

// button minus
for (let i = 0; i < btnplus.length; i++) {
  btnmoins[i].addEventListener("click", function () {
    if (number[i].value > 1) {
      number[i].value = Number(number[i].value) - 1;
      sum()
    }
  });
}
// delete

for (let i = 0; i < deletecard.length; i++) {
  deletecard[i].addEventListener("click", function () {
    Item[i].remove();
    sum()
  });
}

// Total

function sum() {
  let finalquantite = document.querySelectorAll(".Quant");
  let price = document.querySelectorAll(".price");
  let Total = 0;

  for (let i = 0; i < finalquantite.length; i++) {
    Total += Number(finalquantite[i].value) * Number(price[i].innerHTML);
  }
  finalPrice.value = Total;
}
