const subjects = {
  konamiCode: "Snake: 'STOP FOOLIN' AROUND KID!'",
  batman: "Adoraria encomendar uma estátua do Batman",
  kratos: "Adoraria encomendar uma estátua do Kratos",
  arthas: "Adoraria encomendar uma estátua do Arthas",
  nathan: "Adoraria encomendar uma estátua do Nathan Drake",
  croc: "Adoraria encomendar uma estátua do Killer Croc",
  goblin: "Adoraria encomendar uma estátua do Green Goblin",
  malenia: "Adoraria encomendar uma estátua da Malenia",
  panthro: "Adoraria encomendar uma estátua do Panthro",
  encomenda: "Gostaria de falar sobre <Sua Estatua Favorita>",
  atraso: "Onde está a minha estátua",
  cancelamento: "Infelizmente eu preciso cacelar meu pedido",
  theOneRing: "You cannot pass!!! (Sim eu gosto mais dos livros)",
  dontPanic: "Nessa caso O Guia dos Mochileiros das Galaxias afirma que ...",
  cheat: "Observe com atenção jovem gafanhoto!!!",
};

const text = {
  konamiCode: "Você desbloqueou um desconto de 10%, aqui o seu código: ",
  batman:
    "Ou se morre como herói, ou vive-se o bastante para se tornar o vilão",
  kratos: "Boi! A maldade nunca é plena, mata a alma e envenena.",
  arthas:
    "Uther! Como seu futuro rei eu ORDENO que você expurgue este WebSite.",
  nathan: "Sic Parvis Magna",
  croc: "Eu quebrei as costas deles com minhas próprias mãos",
  goblin:
    "Se há algo de que eles gostam mais do que um herói é ver a queda de um herói",
  malenia: "Minha carne era um ouro opaco... e meu sangue, apodrecido.",
  panthro: "Se eles me matarem, pelo menos morro como um homem.",
  encomenda: "Insira descrições detalhadas do seu pedido",
  atraso: "Insira o número do seu do seu pedido aqui junto com mais detalhes",
  cancelamento: "Insira o motivo do seu cancelamento.",
  theOneRing: "They are taking the Hobbits to Isengard!",
  dontPanic: `Como proceder:

1. Permaneça calmo. (Inclusive, isso está impresso na capa do Guia: "DON’T PANIC").

2. Improvise substitutos temporários. Qualquer pano, pedaço de roupa, ou item similar pode quebrar o galho até encontrar uma nova toalha.

3. Recupere uma toalha o mais rápido possível. Em planetas civilizados, toalhas são vendidas em praticamente qualquer loja. Em naves, procure por compartimentos de emergência ou vestiários.

4. Finja que tem uma. A percepção é poderosa. A confiança pode convencer os outros de que você ainda é um verdadeiro mochileiro interestelar.

5. Considere fazer um novo juramento de não ficar sem toalha novamente. Muitos mochileiros tratam isso como uma lição de vida.`,
  cheat: "⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ 🅱️ 🅰️",
};

function applyChoice(choiceId, extra = "") {
  const inputSubject = document.getElementById("inputSubject");
  const textareaMessage = document.getElementById("inputMessage");

  const newSubject = subjects[choiceId] || "";
  let newText = text[choiceId] || "";

  if (extra) {
    newText += extra;
  }

  inputSubject.value = newSubject;
  textareaMessage.value = newText;
  textareaMessage.focus();
}

function changeFormByChoise(event) {
  event.preventDefault();
  applyChoice(event.currentTarget.id);
}

function subjectBtnHandler() {
  const btns = document.getElementsByClassName("choisesButton");

  if (btns.length !== 0) {
    Array.from(btns).forEach((btn) => {
      btn.addEventListener("click", changeFormByChoise);
    });
  }
}

function detectParams() {
  const params = new URL(window.location.href).searchParams;
  const promoVal = params.get("promo");

  const coupon = Math.random().toString(36).substring(2, 10).toUpperCase();

  promoVal === "konamiCode"
    ? applyChoice(promoVal, coupon)
    : applyChoice(promoVal);
}

document.addEventListener("DOMContentLoaded", () => {
  subjectBtnHandler();
  detectParams();
});
