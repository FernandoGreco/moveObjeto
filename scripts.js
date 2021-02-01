
var cont = 0;
function getPlace(e) {
   // document.getElementById("contador").innerHTML = "";  

    cont++;
    var x = e.clientX;
    var y = e.clientY;
    //pega o id da div
    //var id = e.toElement.id;

    var width = screen.width - 200;
    var height = screen.height - 200; 
    
    //tela para mobile / window for mobile
    if(width < 600){
        width = width +600;
        height = height +600;
    }
  

    console.log("Largura: "+width+" Altura"+height);

   
    //var coor = "Coordinates: (" + x + "," + y + ")";
    //document.getElementById("demo").innerHTML = coor;

    
 
    //document.getElementById("element").innerHTML = id;

      var objeto = document.getElementById("objeto");  


      //essa parte será util se o objeto for se distanciando da seta "aos poucos"
      //pega os valores do style | get all values of style
      //var style = getComputedStyle(objeto);
      //pega o lado esquedo | get the left side
      //var marginL = parseInt(style.marginLeft.match(/(\d+)/)[0]);
      //marginL = marginL+15+"px";

      
      //pega o lado direto | get the top side
      //var marginT = parseInt(style.marginTop.match(/(\d+)/)[0]);
      //marginT = marginT+15+"px";

       //gera um posição aleatória na tela
       var marginL = Math.floor(Math.random() * width)+"px";


      //gera um posição aleatória na tela
      var marginT = Math.floor(Math.random() * height)+"px";
      

      //adiciona margin left aleatório ao objeto  
      objeto.style.marginLeft = marginL;

      //adiciona margin top  aleatório ao objeto  
      objeto.style.marginTop = marginT;

      // console.log(e);
       // console.log(e.toElement.id);  
}

setInterval(function(){ 
//	alert ("contatdor "+cont);
let reflexo;
let maior=cont;

if(cont>reflexo){  
    maior=cont;
}

reflexo = cont;
document.getElementById("contador").innerHTML = "Seu reflexo foi "+reflexo + " em 10 segundos";  
    cont = 0;
 //   document.location.reload(true);
     }, 10000);
 
   // contador();



