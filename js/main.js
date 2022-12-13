const name1=document.getElementById("name1")
const password1=document.getElementById("password1")
const form=document.getElementById("form")
const error=document.getElementById("error")

form.addEventListener('submit', (a)=>{
let message=[]
if(name1.value===''||name1.value==null){
    message.push("Name is required")
}
if(password1.value.length <=6){
    message.push("must be 6 character")
}
if(message.length>0){
    a.preventDefault()
    error.innerText=message.join(',')
}

})