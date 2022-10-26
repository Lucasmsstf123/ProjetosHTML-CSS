var count = 0;

function cred() {
  const txt = document.getElementById("txt");
  const divtxt = document.createElement("div");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const li5 = document.createElement("li");
  const li6 = document.createElement("li");
  const li7 = document.createElement("li");
  const li8 = document.createElement("li");
  const li9 = document.createElement("li");
  const li10 = document.createElement("li");
  const hr1 = document.createElement("hr");
  const hr2 = document.createElement("hr");
  const hr3 = document.createElement("hr");
  li1.innerText = "HTML";
  li2.innerText = "PHP";
  li3.innerText = "CSS";
  li4.innerText = "JavaScript";
  li5.innerText = "TypeScript";
  li6.innerText = "SQL";
  li7.innerText = "Oracle";
  /*li8.innerText = "Residência: Itabira, MG";
  li9.innerText = "Idiomas: Português, Inglês, Frânces(básico)";
  li10.innerText = "Linguagens: C++, HTML, CSS, Javascript";*/
  divtxt.appendChild(hr1);
  divtxt.appendChild(li1);
  divtxt.appendChild(li2);
  divtxt.appendChild(li3);
  divtxt.appendChild(li4);
  divtxt.appendChild(li5);
  divtxt.appendChild(li6);
  divtxt.appendChild(li7);
  divtxt.appendChild(hr2);
  /*divtxt.appendChild(li8);
  divtxt.appendChild(li9);
  divtxt.appendChild(li10);
  divtxt.appendChild(hr3);*/
  divtxt.setAttribute("id", "eclipse");
  txt.appendChild(divtxt);
}
function erasecred() {
  document.getElementById("eclipse").remove();
}

function op(){
  if (count != 1) {
  const op = document.getElementById("opt");
  const divwrite = document.createElement("div");
  const p2 = document.createElement("button");
  const p3 = document.createElement("button");
  const p4 = document.createElement("button");
  p2.setAttribute("id", "top");
  p3.setAttribute("id", "middle");
  p4.setAttribute("id", "bottom");
  p2.innerText = "Wiki";
  p3.innerText = "W3C";
  p4.innerText = "Opções";
  divwrite.appendChild(p2);
  divwrite.appendChild(p3);
  divwrite.appendChild(p4);
  divwrite.setAttribute("id", "eclipse");
  op.appendChild(divwrite);
  count ++;
  }
}

function operase() {
  setTimeout(function(){document.getElementById("eclipse").remove()}, 5000)
}

function card1text()
{
  const card = document.getElementById("card1");
  const text = document.createElement("p");
  text.setAttribute("id", "cardtext");
  text.innerText = "SQL é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.";
  document.getElementById("h2_1").remove();
  card.appendChild(text);
}
function card1return()
{
  const card = document.getElementById("card1");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2_1");
  h2.innerText = "SQL";
  document.getElementById("cardtext").remove();
  card.appendChild(h2);
}

function card2text()
{
  const card = document.getElementById("card2");
  const text = document.createElement("p");
  text.setAttribute("id", "cardtext");
  text.innerText = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.";
  document.getElementById("h2_2").remove();
  card.appendChild(text);
}
function card2return()
{
  const card = document.getElementById("card2");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2_2");
  h2.innerText = "HTML";
  document.getElementById("cardtext").remove();
  card.appendChild(h2);
}

function card3text()
{
  const card = document.getElementById("card3");
  const text = document.createElement("p");
  text.setAttribute("id", "cardtext");
  text.innerText = "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML.";
  document.getElementById("h2_3").remove();
  card.appendChild(text);
}
function card3return()
{
  const card = document.getElementById("card3");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2_3");
  h2.innerText = "CSS";
  document.getElementById("cardtext").remove();
  card.appendChild(h2);
}

function card4text()
{
  const card = document.getElementById("card4");
  const text = document.createElement("p");
  text.setAttribute("id", "cardtext");
  text.innerText = "JavaScript é uma linguagem baseada em objetos com funções de primeira classe, conhecida como script para páginas Web.";
  document.getElementById("h2_4").remove();
  card.appendChild(text);
}
function card4return()
{
  const card = document.getElementById("card4");
  const h2 = document.createElement("h2");
  h2.setAttribute("id", "h2_4");
  h2.innerText = "JS";
  document.getElementById("cardtext").remove();
  card.appendChild(h2);
}
