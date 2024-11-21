let herois = [];

// Função para exibir o herói atual
function mostrarHeroiAtual(nome, nivel) {
    const divAtual = document.getElementById('atual');
    divAtual.innerHTML = `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`;
}

// Evento para o formulário
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

// Função para classificar os heróis com base no XP
function classificarHeroi(nome, xp, nivel) {
    herois.push({ nome, xp, nivel });

    // Ordena os heróis com base no XP em ordem decrescente
    herois.sort((a, b) => b.xp - a.xp);

    // Mantém apenas os 5 melhores heróis
    if (herois.length > 5) {
        herois = herois.slice(0, 5);
    }

    atualizarPodio();
}

// Função para atualizar o pódio dos heróis mais poderosos
function atualizarPodio() {
    const podioDiv = document.querySelector('.podio');
    podioDiv.innerHTML = ''; // Limpa o conteúdo anterior

    herois.forEach((heroi, index) => {
        const heroiDiv = document.createElement('div');
        heroiDiv.innerHTML = `#${index + 1} - <strong>${heroi.nome}</strong> (XP: ${heroi.xp}, Nível: ${heroi.nivel})`;
        podioDiv.appendChild(heroiDiv);
    });
}
