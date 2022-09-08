var prompt = require("prompt-sync")();

var percent = parseInt( prompt("give your percent[0 - 100] > ") )


if(percent<0){
    console.log("impossible")
}else if(percent<50){
    console.log("fail")
}else if(percent<60){
    console.log("grade 1")
}else if (percent<70){
    console.log("grade 2")
  }else if(percent<80){
      console.log("grade 3")
  }else if(percent<90){
      console.log("grade 4")
    }else if(percent<=100){
        console.log("grade 5")
    }else if(percent>100){
        console.log("outstanding")
  }