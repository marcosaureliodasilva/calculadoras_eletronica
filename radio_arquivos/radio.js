function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
//letreiro();
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
function limpar1(){
document.formu1.e1.value="";
document.formu1.e2.value="";
focar_nume(0,0);
}//--------------------------------------------------------------------
function limpar2(){
document.formu2.e1.value="";
document.formu2.e2.value="";
focar_nume(1,0);
}//--------------------------------------------------------------------
function limpar3(){
document.formu3.e1.value="";
document.formu3.e2.value="";
focar_nume(2,0);
}//--------------------------------------------------------------------
function escolhe1(){
var E1=parseFloat(document.formu1.e1.value);
var E2=parseFloat(document.formu1.e2.value);
E1=E1/1000000;
E2=E2*1000;
var R1=E1*E2*2*Math.PI;
R1=1/R1;
document.formu1.s1.value=R1+" Ohms";
focar_nume(0,2);
}//--------------------------------------------------------------------
function escolhe2(){
var E1=parseFloat(document.formu2.e1.value);
var E2=parseFloat(document.formu2.e2.value);
E1=E1/1000000;
E2=E2*1000;
var R1=E1*E2*2*Math.PI;
document.formu2.s1.value=R1+" Ohms";
focar_nume(1,2);
}//--------------------------------------------------------------------
function escolhe3(){
var E1=parseFloat(document.formu3.e1.value);
var E2=parseFloat(document.formu3.e2.value);
var R1=2*Math.PI*Math.sqrt(E1*E2);
R1=1000000/R1;
document.formu3.s1.value=R1+" kHz";
focar_nume(2,2);
}//--------------------------------------------------------------------


