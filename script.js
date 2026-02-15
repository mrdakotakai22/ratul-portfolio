
const words=["Admin Executive","Digital Marketing Specialist","Logistics Professional"];
let i=0,j=0,isDeleting=false;
const typing=document.querySelector(".typing");
function type(){
let word=words[i];
if(!isDeleting){
typing.textContent=word.substring(0,j++);
if(j>word.length){isDeleting=true;setTimeout(type,1000);return;}
}else{
typing.textContent=word.substring(0,j--);
if(j===0){isDeleting=false;i=(i+1)%words.length;}
}
setTimeout(type,100);
}
type();
