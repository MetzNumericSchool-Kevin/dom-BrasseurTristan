// Quel est le titre de la boutique
const Title = document.querySelector('h1');
console.log(Title.textContent);

// Des informations manquent !
const description_div = document.getElementById('description_boutique');
const description_p = document.createElement('p');
description_p.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
description_div.appendChild(description_p);