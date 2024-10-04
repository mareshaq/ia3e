const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, utilizo para questões diárias"
        },
        {
            texto: "Não",
            afirmação: "Não, a IA não me ajuda em nada"
        }
        ]
    },
    {
        enunciado: "Você sabe utilizar de maneira correta as IA's?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, ela me ajuda e me da dicas sobre o minhas dúvidas"
        },
        {
            texto:"Não",
            afirmação:"Não, prefiro tirar dúvidas sem as IA's"
        }
        ]
    },
    {
        enunciado: "Quando você utiliza as IA's no seu cotidiano?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, utilizo na escola para responder minhas perguntas"
        },
        {
            texto: "Não",
            afirmação: "Não, nunca uso, prefiro pensar sozinho"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let resposta = "";

function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",()=> respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    resposta = afirmacoes;
    posicao++,
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos vamos virar robôs";
}
mostraPergunta();
