function iniciar(){
anunci="mande-nos um e-mail com sugestões ou críticas para";
compri=anunci.length;
nespaco=compri-1;
posi=1;
comeco=0;
letreiro();
focar_nume(4,0);
}
function escolhe(){
osc=document.formu12.sele123.value;
valo1=osc.substring(2,3);
valo2=osc.substring(1,2);
valo3=document.formu12.sele122.value;
valo4=document.formu12.sele121.value;
valo5=osc.substring(0,1);
valo6=document.formu11.sele113.value;
valo7=document.formu11.sele112.value;
valo8=document.formu11.sele111.value;
valo9=document.formu10.sele101.value;
valo10="1";
valo11="1";
valo12="1";
valo13="1";
valo14=document.formu9.sele91.value;
valo15="0";
valo16="0";
nome1=valo4+valo3+valo2+valo1;
nome2=valo8+valo7+valo6+valo5;
nome3=valo12+valo11+valo10+valo9;
nome4=valo16+valo15+valo14+valo13;
hexa1=letra(nome1);
hexa2=letra(nome2);
hexa3=letra(nome3);
hexa4=letra(nome4);
document.formu2.mos2.value="0x"+hexa4+hexa3+hexa2+hexa1;
document.formu5.mos5.value=nome4;
document.formu6.mos6.value=nome3;
document.formu7.mos7.value=nome2;
document.formu8.mos8.value=nome1;
}//----------------
function letra(nume){
if (nume=="0000"){
nume='0';
}
if (nume=="0001"){
nume='1';
}
if (nume=="0010"){
nume='2';
}
if (nume=="0011"){
nume='3';
}
if (nume=="0100"){
nume='4';
}
if (nume=="0101"){
nume='5';
}
if (nume=="0110"){
nume='6';
}
if (nume=="0111"){
nume='7';
}
if (nume=="1000"){
nume='8';
}
if (nume=="1001"){
nume='9';
}
if (nume=="1010"){
nume='A';
}
if (nume=="1011"){
nume='B';
}
if (nume=="1100"){
nume='C';
}
if (nume=="1101"){
nume='D';
}
if (nume=="1110"){
nume='E';
}
if (nume=="1111"){
nume='F';
}
return nume;
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
function voltar(){
//volta uma pagina no historico
history.back();
}//----------------
function voltar_p(caminho){
//vai para uma localizacao
self.location.href=caminho;
}//----------------
function loca_f(formu) {
//localiza o numero do formulario no array
for (var num1=0;num1<9;num1++){
var contar=document.forms[num1];
if (contar!=undefined) {
var nomef=document.forms[num1].name;
if (nomef==formu){
return num1;
}//se igual
}//se existe
}//for
}//-----------------
function loca_e(formu,elemento) {
//localiza o numero do elemento no array
for (var num1=0;num1<9;num1++){
for (var num2=0;num2<9;num2++){
var contar=document.forms[num1];
if (contar!=undefined) {
contar=document.forms[num1].elements[num2];
if (contar!=undefined) {
var nomef=document.forms[num1].name;
var nomee=document.forms[num1].elements[num2].name;
if (nomef==formu && nomee==elemento){
return num2;
}
}//se existe
}//se existe
}//for
}//for
}//-----------------
function autoc_nume(formu,elemento){
//da um auto click no elemento pelo numero
var contar=document.forms[formu];
if (contar!=undefined) {
contar=document.forms[formu].elements[elemento];
if (contar!=undefined) {
document.forms[formu].elements[elemento].click();
}
}
}//-----------------
function autoc_nome(formu,elemento) {
//da um auto click no elemento pelo nome
var nume1=loca_f(formu);
var nume2=loca_e(formu,elemento);
autoc_nume(nume1,nume2);
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
function focar_nome(formu,elemento) {
//focaliza um elemento pelo nome
var nume1=loca_f(formu);
var nume2=loca_e(formu,elemento);
focar_nume(nume1,nume2);
}//-----------------
function relato(formu,elemento){
//define a variavel action de um form
var nume1=loca_f(formu);
var nume2=loca_e(formu,elemento);
var caminho=document.forms[nume1].elements[nume2].value;
document.forms[nume1].action=caminho;
}//----------------
function locatipo_nume(formu,elemento){
//retorna o tipo do elemento pelo numero
var contar=document.forms[formu];
if (contar!=undefined) {
contar=document.forms[formu].elements[elemento];
if (contar!=undefined) {
var tipo=document.forms[formu].elements[elemento].type;
return tipo;
}
}
}//----------------
