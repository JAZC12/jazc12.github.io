//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
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
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO";messageError="FALLO";messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="21_SELECCIONAR_IMAGENES_resources/media/";
var quest=[["Un fiel compañero, con hocico y cola, peludo y leal,","",""],["Soy escurridizo y felino,mi ronroneo es muy fino,cazo ratones con destreza.","",""],["De manchas en mi piel me visto,en el campo siempre existo,produzco leche, grande soy","",""],["En el barro me revuelco con alegría,mi cuerpo redondo causa simpatía.Oink, oink, es mi peculiar sonido.","",""],["Tiene plumas y pico ancho,en el agua es todo un macho,nadando con gracia y poder.","",""],["Peludo y grande, en el bosque habito,en invierno duermo sin un grito.A veces feroz, otras tierno y bonachón,","",""]];
var altQuest=["","","","","",""];
var media=[["MQ==","UEVSUk8=","0_perro5.jpg",""],["Mg==","R0FUTw==","0_1.png",""],["Mw==","VkFDQQ==","0_5_vaca.jpg",""],["NA==","Q0VSRE8=","0_5__cerdo.jpg",""],["NQ==","UEFUTw==","0_5_pato.jpg",""],["Ng==","T1NP","0_5__oso.jpg",""]];
var alt=["","","","","",""];
var dat=[["Ng==","MQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Mg==","MA==","MQ==","MQ==","MA=="],["Ng==","Mw==","MA==","MQ==","MQ==","MA=="],["Ng==","NA==","MA==","MQ==","MQ==","MA=="],["Ng==","NQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Ng==","MQ==","MQ==","MQ==","MA=="],["MQ==","MQ==","MQ==","MQ==","MQ==","MA=="],["MQ==","Mg==","MA==","MQ==","MQ==","MA=="],["MQ==","Mw==","MA==","MQ==","MQ==","MA=="],["MQ==","NA==","MA==","MQ==","MQ==","MA=="],["MQ==","NQ==","MA==","MQ==","MQ==","MA=="],["MQ==","Ng==","MA==","MQ==","MQ==","MA=="],["Mg==","MQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Mg==","MQ==","MQ==","MQ==","MA=="],["Mg==","Mw==","MA==","MQ==","MQ==","MA=="],["Mg==","NA==","MA==","MQ==","MQ==","MA=="],["Mg==","NQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Ng==","MA==","MQ==","MQ==","MA=="],["Mw==","MQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Mg==","MA==","MQ==","MQ==","MA=="],["Mw==","Mw==","MQ==","MQ==","MQ==","MA=="],["Mw==","NA==","MA==","MQ==","MQ==","MA=="],["Mw==","NQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Ng==","MA==","MQ==","MQ==","MA=="],["NA==","MQ==","MA==","MQ==","MQ==","MA=="],["NA==","Mg==","MA==","MQ==","MQ==","MA=="],["NA==","Mw==","MA==","MQ==","MQ==","MA=="],["NA==","NA==","MQ==","MQ==","MQ==","MA=="],["NA==","NQ==","MA==","MQ==","MQ==","MA=="],["NA==","Ng==","MA==","MQ==","MQ==","MA=="],["NQ==","MQ==","MA==","MQ==","MQ==","MA=="],["NQ==","Mg==","MA==","MQ==","MQ==","MA=="],["NQ==","Mw==","MA==","MQ==","MQ==","MA=="],["NQ==","NA==","MA==","MQ==","MQ==","MA=="],["NQ==","NQ==","MQ==","MQ==","MQ==","MA=="],["NQ==","Ng==","MA==","MQ==","MQ==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="MjFfU0VMRUNDSU9OQVJfSU1BR0VORVM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4,5,6];var in_act=0;
