// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo hacia la izquierda",function(){"aplicacion 7","OK"});
			});
			$('#derecha').on("swipe right",function(){
				navigator.notification.confirm("¿Que deseas hacer?",function(op){
					switch(op)
					{
						case 1:
						navigator.notification.beep(1);
						break;
						
						case 2:
						navigator.notification.vibrate(1500);
						break;
						
					}
				},"Aplicacion 7","SONAR,BIBRAR,CANCELAR");
			});
},false);

});