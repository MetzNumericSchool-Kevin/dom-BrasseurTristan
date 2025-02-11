// Quel est le titre de la boutique
const Title = document.querySelector('h1');
console.log(Title.textContent);

// Des informations manquent !
const description_div = document.getElementById('description_boutique');
const description_p = document.createElement('p');
description_p.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
description_div.appendChild(description_p);

// Roger, enfoiré !
const rogers_joke = document.getElementById('blague_de_roger_le_sorcier');
rogers_joke.remove();

// Archibald n'est pas là, appelons le !
const event_listener = document.getElementById('call_archibald');
document.addEventListener('click', () => { alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`) })