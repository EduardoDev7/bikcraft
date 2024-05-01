//Ativar Links do Header

const links = document.querySelectorAll("header nav a");

function ativarLinks(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){ //Verificando se oque esta escrito no href esta escrito no url
        link.classList.add("ativo");
    }
}

links.forEach(ativarLinks);


//Ativar Links do Orcamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);



//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded","true")
    console.log(resposta)
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click',ativarPergunta);
}


perguntas.forEach(eventosPerguntas);


//Galeria Imagens

const imagens = document.querySelectorAll('.info-imagens img');

function galeriaTrocar(event){
    const principal = document.querySelector(".info-imagens img");
    const clicada = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media){
        const auxiliar = principal.src;
        const auxiliarAlt = principal.alt;
        principal.src = clicada.src;
        clicada.src = auxiliar;
        clicada.alt = auxiliarAlt;
        principal.alt = clicada.alt;
    }
}


function galeriaClique(imagem){
    imagem.addEventListener('click', galeriaTrocar);
}


imagens.forEach(galeriaClique);


// Animacao Plugin
if(window.SimpleAnime){
    new SimpleAnime();
}
