let arry = new Array()


function store(){
    arry[0] = document.getElementById("input1").value
    arry[1] = document.getElementById("input2").value
    arry[2] = document.getElementById("input3").value
    document.getElementById("result1").innerHTML=arry[0];
    document.getElementById("result2").innerHTML=arry[1];
    document.getElementById("result3").innerHTML=arry[2];
}
function delt(){
    arry[0] = document.getElementById("input1").value
    arry[1] = document.getElementById("input2").value
    arry[2] = document.getElementById("input3").value
    let user = prompt("Which Index You Want To delete?")
    if(user==0){
        document.getElementById("result1").style.color="red";
    }
   else if(user==1){
        document.getElementById("result2").style.color="red";
    }
    else if(user==2){
        document.getElementById("result3").style.color="red";
    }
}
function updt(){
    arry[0] = document.getElementById("input1").value
    arry[1] = document.getElementById("input2").value
    arry[2] = document.getElementById("input3").value
    let user = prompt("Which Index You Want To Update?")
    if(user==0){
        document.getElementById("result1").style.color="green";
    }
   else if(user==1){
        document.getElementById("result2").style.color="green";
    }
    else if(user==2){
        document.getElementById("result3").style.color="green";
}}