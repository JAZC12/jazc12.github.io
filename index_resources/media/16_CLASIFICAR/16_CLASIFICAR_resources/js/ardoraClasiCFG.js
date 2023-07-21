//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=1;
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["QVVMTEE=","TUFVTExB","Q0FDQVJFQQ==","R1JVw5FF","TVVKRQ==","Q0hJTExB"];
var img_G=["","","","","",""];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NQ==","Ng=="];
var e_G=["","","","","",""];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["PERRO","GATO","GALLINA","CERDO","VACA","CONEJO"];
var imgGr=["0_2.png","0_1.png","0_5.png","0_5__cerdo.jpg","0_5_vaca.jpg","0_conejo_5.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="FALLO";
var dirMedia="16_CLASIFICAR_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MTZfQ0xBU0lGSUNBUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
