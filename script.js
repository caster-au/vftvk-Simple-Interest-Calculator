function compute()
{
   var principal = document.getElementById("principal").value;
   //this will help to identify negative or zero numbers and direct you to again principle
   if(principal<1){
       alert("Enter a positive number"); 
         document.getElementById("principal").focus(); 
   }
   else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal*rate*years/100;
    var year= new Date().getFullYear()+parseInt(years); 
    var result= document.getElementById("result");
    document.getElementById("result").innerHTML="If you deposit "+"<span class='highlight'>" +principal+"</span>"+",\<br\>at an interest rate of "+"<span class='highlight'>"+rate+"%"+"</span>"+"\<br\>You will receive an amount of "+"<span class='highlight'>"+amount+"</span>"+",\<br\>in the year "+"<span class='highlight'>"+year+"</span>"+"\<br\>";
   }
}
function updateRate(amount){
    var rateval= document.getElementById("rate_val");
    rateval.innerHTML=amount;
}    