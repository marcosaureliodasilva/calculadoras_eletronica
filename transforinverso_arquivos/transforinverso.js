function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
focar_nume(1,1);
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
document.formu3.f1.value=60;
document.formu3.nt1.value="";
document.formu3.nt2.value="";
document.formu3.t4.value="";
document.formu3.t5.value="";
document.formu3.t6.value=11300;
focar_nume(0,1);
}//--------------------------------------------------------------------
function decide(){
N1=parseFloat(document.formu3.nt1.value);
N2=parseFloat(document.formu3.nt2.value);
F=parseFloat(document.formu3.f1.value);
A=parseFloat(document.formu3.t4.value);
esp=parseFloat(document.formu3.t5.value);
BM=parseFloat(document.formu3.t6.value);
SG=A*esp;
SM=SG/1.1;
EV=100000000/(4.44*BM*F*SM);
V1=N1/EV;
V2=N2/EV*1.1;
document.formu4.resu1.value=SM+" cm2";
document.formu4.resu2.value=SG+" cm2";
document.formu4.resu4.value=EV+" esp/volt";
document.formu4.resu5.value=V1+" V";
document.formu4.resu6.value=V2+" V";
focar_nume(1,0);
}//----------------
