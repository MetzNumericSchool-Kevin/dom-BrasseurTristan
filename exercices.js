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
event_listener.addEventListener('click', () => { alert(`🧙‍♂️ J'arrive, j'arrive Aventurier !`) })

// Faisons un peu de magie 🪄

const all_btn = document.querySelectorAll("div.boite");
const red_btn = document.getElementById('btn_change_red');
const blue_btn = document.getElementById('btn_change_blue');
const green_btn = document.getElementById('btn_change_green');
console.log(all_btn);
red_btn.addEventListener('click', () => { all_btn[0].style.backgroundColor = 'red' })
blue_btn.addEventListener('click', () => {
    all_btn[0].style.backgroundColor = 'blue';
    all_btn[1].style.backgroundColor = 'blue'
})
green_btn.addEventListener('click', () => {
    all_btn.forEach(element => {
        element.style.backgroundColor = 'green';
    })
})