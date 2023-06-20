function getFormvalue() {
    //Write your code here
 var x=document.getElementById("form1");
   for(var i=0; i<x.length; i++)
   {
    if(x.elements[i].value!='submit')
    {
       alert(x.elements[i].value+x.elements[i+1].value);
    }
   }

}
