var timeAct=250; timeIni=250; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var wordsGame="MTdfT1JERU5BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["TGEgdmFjYSBwYWPDrWZpY2EgeSBydW1pYW50ZSwgbm9zIHJlZ2FsYSBsZWNoZSB5IGNhcm5lIGFidW5kYW50ZS4=","RWwgY2VyZG8gZXMgdW4gYW5pbWFsIG9tbsOtdm9ybywgcXVlIHNlIGFsaW1lbnRhIGRlIHVuYSB2YXJpZWRhZCBkZSBhbGltZW50b3Mu","RWwgcGVycm8gZXMgZWwgbWVqb3IgYW1pZ28gZGVsIGhvbWJyZSwgc2llbXByZSBmaWVsIHkgbGVhbC4=","RWwgc2FwbyBzZSBhbGltZW50YSBkZSBpbnNlY3RvcyB5IHBlcXVlw7FvcyBpbnZlcnRlYnJhZG9zLCBheXVkYW5kbyBhIGNvbnRyb2xhciBsYXMgcGxhZ2FzIGVuIGVsIGVjb3Npc3RlbWEu","RWwgZGVsZsOtbiBlcyB1biBhbmltYWwgbXV5IMOhZ2lsIHkgcsOhcGlkbywgY2FwYXogZGUgcmVhbGl6YXIgYWNyb2JhY2lhcyBpbXByZXNpb25hbnRlcyBlbiBlbCBhZ3VhLg=="];imaW=["5_vaca.jpg","6.png","perro_3.jpg","5_rana.jpg","12_delf.jpg"];queW=["","","","",""];altW=["","","","",""];c=[64,77,59,107,97];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="17_ORDENAR_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
