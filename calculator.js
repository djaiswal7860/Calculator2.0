var x=document.querySelector(".history");
var data;
var dataH=document.querySelector("#resultH");
var ans=[],eq=[];
var InputData=document.querySelector("#result");
var historyData=document.querySelector("#history");
function apply(show){
 if(InputData.value=="0")
{
InputData.value=show;
}
else{
InputData.value+=show;
}
}
function clr()
{
InputData.value="0";
dataH.value=""
}
function cal()
{
 data=InputData.value+ "=";
 InputData.value=eval(InputData.value);
 dataH.value=data;

 ans.push(eval(InputData.value));
 eq.push(data);
}
function showHistory()
{
 if(x.style.display=="block"){
   x.style.display="none"; 
 }
 else{
   x.style.display="block";
}

var history="<div>";
for(let i=0;i<eq.length;i++)
{
   history+="<p><div class='inhis'></p>"+ eq[i]+"</p><p>"+ ans[i]+"</p></div>";
}
history+="</div>";
historyData.innerHTML=history;
}

function clearHistory()
{

historyData.innerHTML="";
eq=[];
answers=[];

}
function del()
{
InputData.value=InputData.value.slice(0,-1);
}
function clos()
{
x.style.display = "none";
}
