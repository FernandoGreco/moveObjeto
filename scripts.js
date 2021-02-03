
var cont = 0;
var maior = 0;
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
  

   // console.log("Largura: "+width+" Altura"+height);

   
    //var coor = "Coordinates: (" + x + "," + y + ")";
    //document.getElementById("demo").innerHTML = coor;

    
 
    //document.getElementById("element").innerHTML = id;

      var objeto = document.getElementById("objeto");  


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

    
    var contador = document.getElementById("contador");    
    var recorde = document.getElementById("maior");

    var txtAtual = contador.innerHTML;

    txtAtual = txtAtual.slice(15,17);

    //verifica se está na primeira interação, ou seja se não têm nenhum valor no campo com id contador
    if(txtAtual == ''){
        maior = cont;
    //adiciona sempre o maior valor a variável maior    
    }else if (maior < cont){
        maior = cont;
     }

    console.log("maior"+ maior);
   // console.log("vai lixo"+txtAtual+typeof(txtAtual));
  
    //insere o valor atual que o mouse ficou sobre o quadrado 
    contador.innerHTML = "Seu reflexo atual "+cont + " em 10 segundos";
    cont = 0;

    //insere o valor mais alto de acertos
    recorde.innerHTML = "Recorde: "+maior;
    

 //   document.location.reload(true);
     }, 10000);
 
   // contador();



