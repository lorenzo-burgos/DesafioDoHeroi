let herois = [];

function mostrarHeroiAtual(nome, nivel) {
    const divAtual = document.getElementById('atual');
    divAtual.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`;
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const xp = parseInt(document.getElementById('xp').value.trim(), 10);

    let nivel;
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 6000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    mostrarHeroiAtual(nome, nivel);

    classificarHeroi(nome, xp, nivel);

    document.getElementById('nome').value = '';
    document.getElementById('xp').value = '';
});

function classificarHeroi(nome, xp, nivel) {
    herois.push({ nome, xp, nivel });

    herois.sort((a, b) => b.xp - a.xp);

    if (herois.length > 5) {
        herois = herois.slice(0, 5);
    }

    atualizarPodio();
}

function atualizarPodio() {
    const podioDiv = document.querySelector('.podio');
    podioDiv.innerHTML = ''; 
    herois.forEach((heroi, index) => {
        const heroiDiv = document.createElement('div');
        heroiDiv.innerHTML = `#${index + 1} - <strong>${heroi.nome}</strong> (XP: ${heroi.xp}, Nível: ${heroi.nivel})`;
        podioDiv.appendChild(heroiDiv);
    });
}
