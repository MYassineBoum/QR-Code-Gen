let button=document.getElementById("btn");
let input=document.getElementById("lien");
let qrCode=document.getElementById("qrCode");
let refresh=document.getElementById("refresh");

refresh.hidden=true;
qrCode.hidden=true;

button.addEventListener("click",function(){
    if(!input.value){
        return;
    } else{
        button.innerText="Generating...";
        qrCode.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
        qrCode.addEventListener("load",function(){
            qrCode.hidden=false;
            refresh.hidden=false;
            button.innerText="Generate";
        });
    }
});

refresh.addEventListener("click",function(){
    location.reload();
});