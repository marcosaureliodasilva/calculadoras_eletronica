function iniciar(){
focar_nume(0,0);
document.formu0.perguntar.value="";
document.formu1.mostrador.value="";
document.formu3.responder.value="";
meio="";
pegador="";
resto="";
mostra="";
etapa=1;
fina=0;
mascara="computador";
tmascara=mascara.length;
mudar();
//------------------------------------------
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
}//----------------
function limpar(){
document.formu0.perguntar.value="";
document.formu1.mostrador.value="";
document.formu3.responder.value="";
meio="";
pegador="";
resto="";
mostra="";
etapa=1;
fina=0;
focar_nume(0,0);
}//--------------------------------------------------------------------
function mudar(){
pegador=document.formu0.perguntar.value;
if (pegador!=""){
document.formu0.perguntar.value="";
meio=meio+pegador;
pegador="";
meio=meio.toLowerCase();
tamanho=meio.length;
if(etapa==1){
cata=meio.indexOf(" k");
if (cata!=-1){
inic=cata;
cata=-1;
etapa=2;
}//cata
mostra=meio;
}//etapa1
if(etapa==2){
cmascara=tamanho-inic;
cmascara=cmascara-1;
cata=meio.indexOf("x");
if (cata!=-1){
fina=cata;
cata=-1;
}//cata
if (cmascara>tmascara){
fina=tamanho-1;
etapa=3;
}//mascara
if (fina==0){
resto=meio.substring(inic+2,inic+2+cmascara);
}
mostra=meio.substring(0,inic+1)+mascara.substring(0,cmascara);
}//etapa2
if(etapa==3){
mostra=meio.substring(0,inic+1)+mascara.substring(0,cmascara)+meio.substring(fina,tamanho);
}//etapa3
document.formu1.mostrador.value=mostra;
}//diferente de ""
setTimeout("mudar()",5)
}//----------------
function decide(){
if (resto==""){
resto="Essa não foi uma pergunta inteligente...";
}
focar_nume(2,0);
document.formu3.responder.value=resto;
}//-------------------------------------------------------------------------------------------------------------------------------
function letreiro(){
//letreiro na barra de status
espaco="";
for (rec=1;rec<=nespaco;rec++){
espaco=espaco+" ";
}//para
letrado=espaco+anunci.substring(comeco,posi);
window.status=letrado;
if (posi<compri){
posi++;
}//se
nespaco--;
if (nespaco<=0){
comeco++;
}//se
if (comeco==compri){
nespaco=compri-1;
posi=1;
comeco=0;
}//se
setTimeout("letreiro()",150)
}//-----------------
function focar_nume(formu,elemento) {
//focaliza um elemento pelo numero
var contar=document.forms[formu];
if (contar!=undefined) {
contar=document.forms[formu].elements[elemento];
if (contar!=undefined) {
document.forms[formu].elements[elemento].focus();
}
}
}//-----------------

