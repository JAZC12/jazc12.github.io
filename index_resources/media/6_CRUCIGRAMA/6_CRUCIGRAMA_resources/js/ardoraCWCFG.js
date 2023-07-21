//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageErrorG="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Nl9DUlVDSUdSQU1B"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","UA==","QQ==","VA==","Tw==","","","",""],["","","RQ==","","","","","","",""],["Qw==","RQ==","Ug==","RA==","Tw==","","","","",""],["","","Ug==","","Uw==","QQ==","UA==","Tw==","",""],["","","Tw==","","Tw==","TA==","","","",""],["","","","","","UA==","","","",""],["","","Vg==","QQ==","Qw==","QQ==","","","",""],["","","","","","Qw==","","","",""],["","RQ==","TA==","RQ==","Rg==","QQ==","Tg==","VA==","RQ==",""],["","","","","","Uw==","","","","Og=="]];
var x1=[1,3,3,5,3,2,6,5,5];
var y1=[3,1,1,4,7,9,4,3,5];
var x2=[5,6,3,8,6,9,6,5,6];
var y2=[3,1,5,4,7,9,10,5,5];
var imaCW=["6_CRUCIGRAMA_resources/media/5__cerdo.jpg","6_CRUCIGRAMA_resources/media/5_pato.jpg","6_CRUCIGRAMA_resources/media/2.png","6_CRUCIGRAMA_resources/media/5_rana.jpg","6_CRUCIGRAMA_resources/media/5_vaca.jpg","6_CRUCIGRAMA_resources/media/5_elefante.jpg","6_CRUCIGRAMA_resources/media/5_alpa.jpg","6_CRUCIGRAMA_resources/media/5__oso.jpg",""];
var audioCW=["","","","","","","","",""];
var defCW=["Animal de granja que suelen tener un cuerpo robusto, con piel gruesa y cerdas en su cuerpo.","Ave acuática de tamaño mediano a grande.","Conocido como el mejor amigo del hombre debido a su estrecha relación con los seres humanos a lo largo de la historia.","Un anfibio de cuerpo robusto y piel rugosa.","Se crían principalmente por su carne, leche y cuero.","Mamífero de gran tamaño perteneciente a la familia Elephantidae.","Mamífero rumiante de la familia Camelidae, nativo de los Andes de América del Sur.","Mamífero carnívoro de gran tamaño",""];
var altCW=["","","","","","","","",""];
var colNum=10;
var rowNum=10;
