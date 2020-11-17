function getPlace(e) {
    
    var x = e.clientX;
    var y = e.clientY;
    //pega o id da div
    var id = e.toElement.id;

    var width = screen.width - 200;
    var height = screen.height - 200; 
    
    if(width < 400){
        width+300;
        height+300;
    }
  

    console.log("Largura: "+width+" Altura"+height);

    //var coor = "Coordinates: (" + x + "," + y + ")";
    //document.getElementById("demo").innerHTML = coor;

    //só executa se mouse estiver em cima do objeto
    if(id == "objeto"){
    //document.getElementById("element").innerHTML = id;

      var objeto = document.getElementById("objeto");  

      //pega os valores do style | get all values of style
      var style = getComputedStyle(objeto);


      //pega o lado esquedo | get the left side
      //var marginL = parseInt(style.marginLeft.match(/(\d+)/)[0]);
      //marginL = marginL+15+"px";

       //gera um posição aleatória na tela
       var marginL = Math.floor(Math.random() * width)+"px";

      //pega o lado direto | get the top side
      //var marginT = parseInt(style.marginTop.match(/(\d+)/)[0]);
      //marginT = marginT+15+"px";

      //gera um posição aleatória na tela
      var marginT = Math.floor(Math.random() * height)+"px";
      

      //adiciona margin left aleatório ao objeto  
      objeto.style.marginLeft = marginL;

      //adiciona margin top  aleatório ao objeto  
      objeto.style.marginTop = marginT;
      
      
    }


       // console.log(e);
       // console.log(e.toElement.id);


  }

  


