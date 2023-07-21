//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=5;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=1;
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
var timeOnMessage=5; messageOk="FELICIDADES"; messageTime="SE TERMINO TU TIEMPO"; messageError="FALLO"; messageAttempts="INTENTE  NUEVAMENTE"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="14_COMPLETAR_resources/media/14__silve.jpg" alt="Ima"  align="left"><p>Los animales <select aria-label="Item 1" name="item1" id="item1" class="ardoraCombo"></select> son aquellos que viven en su hábitat natural, no domesticados ni criados por los seres <select aria-label="Item 2" name="item2" id="item2" class="ardoraCombo"></select>. Estos animales tienen una variedad de especies y se distribuyen en diferentes ecosistemas en todo el <select aria-label="Item 3" name="item3" id="item3" class="ardoraCombo"></select>. </p><p> </p>','<img tabindex="0" alt="" class="imaup imaRight" src="14_COMPLETAR_resources/media/14__mami.jpg" alt="Ima"  align="right"><p>Los <select aria-label="Item 4" name="item4" id="item4" class="ardoraCombo"></select> son un grupo diverso de animales que se caracterizan por tener glándulas mamarias que les permiten alimentar a sus crías con leche <select aria-label="Item 5" name="item5" id="item5" class="ardoraCombo"></select>. </p><p>  </p><p> </p>','<img tabindex="0" alt="" class="imaup imaLeft" src="14_COMPLETAR_resources/media/14__acua.jpg" alt="Ima"  align="left"><p>Los animales acuáticos son aquellos que viven en el <select aria-label="Item 6" name="item6" id="item6" class="ardoraCombo"></select> y dependen de ella para su supervivencia. Estos animales han desarrollado adaptaciones específicas para nadar, respirar y obtener alimento en un <select aria-label="Item 7" name="item7" id="item7" class="ardoraCombo"></select> acuático. </p><p>  </p><p> </p>','<img tabindex="0" alt="" class="imaup imaLeft" src="14_COMPLETAR_resources/media/14_her.jpg" alt="Ima"  align="left"><p>Los animales herbívoros son aquellos que se alimentan principalmente de <select aria-label="Item 8" name="item8" id="item8" class="ardoraCombo"></select> y materia vegetal. Su anatomía y fisiología están adaptadas para digerir y obtener <select aria-label="Item 9" name="item9" id="item9" class="ardoraCombo"></select> de estos alimentos. </p><p>  </p><p> </p>'];
var b=["Mzc=","OA==","Mg==","MzY=","MTQ=","NDA=","MTc=","MTA=","Mw==","OQ==","MzE=","NDE=","NDI=","NA==","MTE=","OQ==","NDU=","MzI=","NDY=","MTY=","NQ==","MQ==","MjY=","NDc=","MjA=","Mw==","NA==","Mg==","OA==","MTU=","MjE=","Nw==","MjI=","NQ==","MjU=","Mjc=","Ng==","MzA=","MzU="];
var c=[4,7,10,4,4,5,5,10,5,7,5,5,8,9,7,10,8,6,6,5,10,10,12,4,10,9,7,7,5,8,10,7,12,7,6,7,4,4,5];
var answers=["lago","plantas","terricolas","casa","peru","carne","mundo","crecientes","mundo","muertos","suelo","pizza","insectos","mamíferos","humanos","nutrientes","alimento","tierra","comida","campo","silvestres","silvestres","deslactosada","todo","herbivoros","naturales","muertos","humanos","vivos","universo","carnivoros","entorno","insectivoros","materna","gloria","natural","agua","aire","lugar"];
var a=["7","8","1","7","3","8","3","2","3","2","6","8","8","4","2","9","9","6","9","3","1","1","5","9","4","1","1","2","2","3","4","7","4","5","5","5","6","6","7"];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MTRfQ09NUExFVEFS"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var fHelp="Verdana, Geneva, sans-serif";
