document.querySelector("#list_open").onclick = function(){
 let normal=true;
 if(normal){
   menu_list.style.height="290px";
   normal=!normal;
 }else{
   menu_list.style.height="0px";
   normal=!normal;
 }

 document.querySelector("#button_color").style.color = "rgb(201,174,0)";

 document.querySelector("#button_color2").style.color = "black";
 document.querySelector("#button_color2").style.backgroundColor = "white";

 document.querySelector('#menu_list').style.display = "block";
 document.querySelector('#menu_list2').style.display = "none";
}

document.querySelector("#list_open2").onclick = function(){
 let morning=true;
 if(morning){
   menu_list2.style.height="400px";
   morning=!morning;
 }else{
   menu_list2.style.height="0px";
   morning=!morning;
 }
 
 document.querySelector("#button_color2").style.color = "rgb(201,174,0)";

 document.querySelector("#button_color").style.color = "black";
 document.querySelector("#button_color").style.backgroundColor = "white";

 document.querySelector('#menu_list2').style.display = "block";
 document.querySelector('#menu_list').style.display = "none";
}