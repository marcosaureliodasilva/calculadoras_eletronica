function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
}//-----------------
function letreiro(){
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
function limpar(){
document.formu1.r1.value="";
document.formu1.r2.value="";
document.formu1.c1.value="";
focar_nume(0,0);
}//--------------------------------------------------------------------
function escolhe(){
R1=parseFloat(document.formu1.r1.value);
R2=parseFloat(document.formu1.r2.value);
C1=parseFloat(document.formu1.c1.value);
C1=C1/1000000000000;
R2=R2*2;
R1=R1+R2;
C1=C1*R1;
R1=1.44/C1;
document.formu2.resu1.value=R1+" Hz";
focar_nume(1,0);
}//--------------------------------------------------------------------
