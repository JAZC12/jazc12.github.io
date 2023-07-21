//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function () {$("body").css({backgroundColor:"#FFFFFF"});var tabs = $("#indexardoraTabs").tabs({heightStyle: "fill"});$("body").on("resize", function () {tabs.tabs("refresh");});
$( ".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *" )
.removeClass("ui-corner-all ui-corner-top")
.addClass("ui-corner-bottom");
$( ".tabs-bottom .ui-tabs-nav" ).appendTo(".tabs-bottom");
 $( "#indexardoraTabs" ).tabs({collapsible: true});
});
function initAct(){
if (tiAval){parent.iniciaActividade()}
}
function randomSort(){
}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
