//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=false;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["UEFUTw==","Q0VSRE8=","U0FQTw==","VkFDQQ==","RUxFRkFOVEU=","UEVSUk8=","T1NP","QUxQQUNB","Q09ORUpP","R0FUTw=="];var cp_ima=["4.png","6.png","5_rana.jpg","5_vaca.jpg","5_elefante.jpg","perro_2.jpg","5__oso.jpg","5_alpa.jpg","conejo_3.jpg","1.png"];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["QXZlIGFjdcOhdGljYSBkZSB0YW1hw7FvIG1lZGlhbm8gYSBncmFuZGUu","QW5pbWFsIGRlIGdyYW5qYSBxdWUgc3VlbGVuIHRlbmVyIHVuIGN1ZXJwbyByb2J1c3RvLCBjb24gcGllbCBncnVlc2EgeSBjZXJkYXMgZW4gc3UgY3VlcnBv","VW4gYW5maWJpbyBkZSBjdWVycG8gcm9idXN0byB5IHBpZWwgcnVnb3NhLg==","U2UgY3LDrWFuIHByaW5jaXBhbG1lbnRlIHBvciBzdSBjYXJuZSwgbGVjaGUgeSBjdWVyby4=","TWFtw61mZXJvIGRlIGdyYW4gdGFtYcOxbyBwZXJ0ZW5lY2llbnRlIGEgbGEgZmFtaWxpYSBFbGVwaGFudGlkYWUu","Q29ub2NpZG8gY29tbyBlbCBtZWpvciBhbWlnbyBkZWwgaG9tYnJlIGRlYmlkbyBhIHN1IGVzdHJlY2hhIHJlbGFjacOzbiBjb24gbG9zIHNlcmVzIGh1bWFub3MgYSBsbyBsYXJnbyBkZSBsYSBoaXN0b3JpYQ==","TWFtw61mZXJvIGNhcm7DrXZvcm8gZGUgZ3JhbiB0YW1hw7Fv","TWFtw61mZXJvIHJ1bWlhbnRlIGRlIGxhIGZhbWlsaWEgQ2FtZWxpZGFlLCBuYXRpdm8gZGUgbG9zIEFuZGVzIGRlIEFtw6lyaWNhIGRlbCBTdXIu","QW5pbWFsIGRvbWVzdGljbyBkZSBvcmVqYXMgbGFyZ2FzLg==","RGlzdGluZ3VpZG8gcG9yIGxhIGNhcGFjaWRhZCBkZSBhdHJhcGFyIHJvZWRvcmVzLg=="];var cp_num=[4,5,4,4,8,5,3,6,6,4];var cp_alt=["","","","","","","","","",""];
var wordsGame="MDlfQ09OU1RSVUlS"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
