let nomeUsuário = prompt("Qual seu nome?");
let elemento = document.querySelector("#nome-usuário");
alert("Que nome horrível kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
alert("brincadeira");
alert("Monte seu PC Gamer agora, por apenas R$ 1,99! Clicando nesse link: https//www.nao-e-um-cavalo-de-troia.com.br");
alert("Compre um Playstation 5 agora, por apenas R$ 3,99! Clicando nesse link: https//www.definitivamente-nao-e-um-cavalo-de-troia.com.br");
while(nomeUsuário == ""){
    nomeUsuário = prompt("PARCEIRO, TU VAI QUERER FALAR TEU NOME, OU TÁ DIFÍCIL????????");
}
if(nomeUsuário == null){
    elemento.textContent = prompt("Não vai querer falar? Beleza, o que é teu ta guardado...")
    elemento.textContent = "Sei lá quem"
}
else{
    elemento.textContent = nomeUsuário;
}