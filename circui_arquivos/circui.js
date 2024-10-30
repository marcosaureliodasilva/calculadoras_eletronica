function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
focar_nume(4,0);
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
function escolhe(){
valo1=parseFloat(document.formu1b.cores1.value);
document.formu1a.mos1.value=valo1;
valo2=parseFloat(document.formu2b.cores2.value);
document.formu2a.mos2.value=valo2;
valo3=parseFloat(document.formu3b.cores3.value);
document.formu3a.mos3.value=valo3;
valo4=parseFloat(document.formu4b.cores4.value);
document.formu4a.mos4.value=(valo4*100)+" %";
valo1=valo1*10;
valo2=valo1+valo2;
valo3=Math.pow(10,valo3);
valo1=valo2*valo3;
valo2=valo2*valo3*valo4;
document.formu2c.resu.value=valo1+" Ohms";
document.formu3c.tole.value=valo2+" Ohms";
document.formu4c.inte.value=(valo1-valo2)+" Ohms até "+(valo1+valo2)+" Ohms";
}//----------------
