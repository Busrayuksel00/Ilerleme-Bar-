var i=0;
function ilerle(){
    if(i==0){
        i=1;
        var temel=document.getElementById("mybar");
        var width=1;
        var id=setInterval(frame,90); // belirttiğimiz süre içerisinde sürekli olarak belirttiğim işleri yapması kısacası otomatik olarak kod bloklarımızı işletmek için kullanmaktayız.
          function frame(){
            if(width>=100){
                clearInterval(id)
                i=0;
            }

            else{
                width++;
                temel.style.width= width+"%";
                temel.innerHTML=width+"%";
            }


        }














    }
}





           