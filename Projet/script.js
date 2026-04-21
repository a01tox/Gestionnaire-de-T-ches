let mesTaches = [
    { id: 1, texte: "Create and Append a New List Item", fini: true },
    { id: 2, texte: "Toggle Dark Mode/Theme", fini: false },
    { id: 3, texte: "Delete an Element", fini: false }
];

let filtreActuel = 'toutes';

const formulaire = document.getElementById('taskForm');
const champSaisie = document.getElementById('taskInput');
const maListe = document.getElementById('taskList');
const compteur = document.getElementById('taskCounter');
const boutonsFiltre = document.querySelectorAll('.filter-btn');

function rafraichirCompteur() {
    let nbRestantes = 0;
    for (let t of mesTaches) {
        if (!t.fini) nbRestantes++;
    }
    compteur.innerText = nbRestantes;
}

function afficherTaches() {
    maListe.innerHTML = "";

    mesTaches.forEach(function (tache) {

        if (filtreActuel === 'active' && tache.fini) return;
        if (filtreActuel === 'completed' && !tache.fini) return;

        const item = document.createElement('li');
        item.className = 'task-item';
        if (tache.fini) item.classList.add('terminee');

        const check = document.createElement('div');
        check.className = 'checkbox-container';
        check.onclick = function () {
            tache.fini = !tache.fini;
            afficherTaches();
            rafraichirCompteur();
        };

        const texteTache = document.createElement('span');
        texteTache.className = 'task-text';
        texteTache.innerText = tache.texte;

        const btnSuppr = document.createElement('button');
        btnSuppr.className = 'delete-btn';
        btnSuppr.innerHTML = '&times;';
        btnSuppr.onclick = function () {
            mesTaches = mesTaches.filter(i => i.id !== tache.id);
            afficherTaches();
            rafraichirCompteur();
        };

        item.appendChild(check);
        item.appendChild(texteTache);
        item.appendChild(btnSuppr);

        maListe.appendChild(item);
    });

    if (maListe.innerHTML === "") {
        maListe.innerHTML = '<p class="empty-msg">Aucune tâche ici !</p>';
    }

    rafraichirCompteur();
}

formulaire.onsubmit = function (evenement) {
    evenement.preventDefault();

    let texteSaisi = champSaisie.value.trim();

    if (texteSaisi !== "") {
        const nouvelleTache = {
            id: Date.now(),
            texte: texteSaisi,
            fini: false
        };

        mesTaches.unshift(nouvelleTache);

        champSaisie.value = "";

        afficherTaches();
    }
};
boutonsFiltre.forEach(function (btn) {
    btn.onclick = function () {
        boutonsFiltre.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        filtreActuel = btn.getAttribute('data-filter');
        afficherTaches();
    };
});

window.onload = function () {
    afficherTaches();
};