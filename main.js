const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligência artificial pode um dia alcançar ou superar a inteligência humana?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A inteligência artificial tem potencial para alcançar e até superar a inteligência humana em certos domínios, devido aos avanços em aprendizado de máquina e processamento de dados."
            },
            {
                texto: "Não",
                afirmacao: "No entanto, desafios como compreensão intuitiva e criatividade limitam a capacidade da IA de igualar completamente a inteligência humana."
            }
        ]
    },
    {
        enunciado: "Devemos permitir que inteligências artificiais tenham direitos legais e éticos semelhantes aos humanos?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Reconhecer direitos legais e éticos para inteligências artificiais pode promover um tratamento justo e responsável, além de fomentar o desenvolvimento ético da tecnologia."
            },
            {
                texto: "Não",
                afirmacao: "Conceder direitos legais e éticos às inteligências artificiais pode ser prematuro e complexo, dado que elas não possuem consciência ou moralidade como os seres humanos."
            }
        ]
    },
    {
        enunciado: "A inteligência artificial poderia substituir completamente os empregos humanos no futuro?",
        alternativas: [
            {
                texto: "Com Certeza",
                afirmacao: "A inteligência artificial tem o potencial de substituir certos empregos ao automatizar tarefas repetitivas e melhorar a eficiência, especialmente em setores como manufatura e logística."
            },
            {
                texto: "De jeito nenhum",
                afirmacao: "A inteligência artificial não é susceptível de substituir completamente os empregos humanos, pois muitos requerem habilidades únicas como criatividade, empatia e julgamento ético."
            }
        ]
    },
    {
        enunciado: "Devemos regulamentar o desenvolvimento e o uso da inteligência artificial de forma mais rigorosa?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Regulamentar o desenvolvimento e uso da inteligência artificial de maneira rigorosa pode garantir segurança, ética e transparência, protegendo a privacidade e promovendo benefícios sociais."
            },
            {
                texto: "Não",
                afirmacao: "Regulamentações excessivamente rigorosas podem sufocar a inovação e ser difíceis de adaptar à rápida evolução da tecnologia, levando a desafios na aplicação global da inteligência artificial."
            }
        ]
    },
    {
        enunciado: "A inteligência artificial pode ser moralmente responsável por suas ações?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A inteligência artificial pode ser moralmente responsável se desenvolvida com princípios éticos e capacidade de prever consequências de suas ações."
            },
            {
                texto: "Não",
                afirmacao: "A inteligência artificial não pode ser moralmente responsável devido à falta de consciência e compreensão genuína de valores éticos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();