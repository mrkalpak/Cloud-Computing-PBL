function add(){
    let a=parseInt(document.getElementById("1no").value);
    let b=parseInt(document.getElementById("2no").value);
    
    document.getElementById("result").value= parseInt(a+b);
}
function sub(){
    let a=parseInt(document.getElementById("1no").value);
    let b=parseInt(document.getElementById("2no").value);
    
    document.getElementById("result").value= parseInt(a-b);
}
function mul(){
    let a=parseInt(document.getElementById("1no").value);
    let b=parseInt(document.getElementById("2no").value);
    
    document.getElementById("result").value= parseInt(a*b);
}
function div(){
    let a=parseInt(document.getElementById("1no").value);
    let b=parseInt(document.getElementById("2no").value);
    
    document.getElementById("result").value= a/b;
}
