function saludar(saludo)
{
    alert(saludo)
}



function deletecarac(){
    var caja2 = document.f1.txtcaja2.value;
        if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel!=true){
            document.f1.txtcaja2.value = "0";
        }
        else if(blocdel!=true){
             var res = caja2.substring(0,caja2.length-1);
             document.f1.txtcaja2.value = res;
        }
}
function escribir(n){
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=res+""+n
    
}
function calculando(){
    var res=document.getElementById("valores").value
    //alert(eval(res))
    document.getElementById("valores").value=eval(res)


}


