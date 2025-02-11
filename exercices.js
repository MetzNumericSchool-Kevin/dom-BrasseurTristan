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


// Aventurier, voici ma boutique !
const potions = [
    {
        nom: "Potion de soin",
        description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
        prix: 10,
    },
    {
        nom: "Potion de sommeil",
        description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
        prix: 50,
    },
];

const potion_list = document.querySelector('#liste_potions');
const potion_template = document.querySelector('#template_potion');
// const clone_template = potion_template.content.cloneNode(true);
potions.forEach(potion => {
    const clone_template = potion_template.content.cloneNode(true);
    const template_title = clone_template.querySelector('.nom_potion');
    template_title.textContent = potion.nom;
    const template_price = clone_template.querySelector('.prix_potion');
    template_price.textContent = potion.prix;
    const template_desc = clone_template.querySelector('.description_potion');
    template_desc.textContent = potion.description;
    potion_list.appendChild(clone_template)
})
