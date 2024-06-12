function reset()
{
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let msg=document.getElementById("msg")
    if(name.value=="" && email.value=="" && msg.value=="")
        {
            alert("please enter some details")
        }
        else{
            name.value=""
            email.value=""
            msg.value=""
        }
}
function submit()
{
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let msg=document.getElementById("msg")
    let obj={
        name:name.value,
        email:email.value,
        msg:msg.value,
    }    
    if(name.value=="" || email.value=="" || msg.value=="")
        {
            alert("please enter all details")
        }
        else{
            localStorage.setItem("Details : ", obj.name+" \n" +obj.email+" \n"+obj.msg)
            console.log(obj)
            name.value=""
            email.value=""
            msg.value="" 
        }
}
document.getElementById('name').addEventListener('keypress',function onfocus(event){
    if(event.key=='Enter')
        {
            document.getElementById('email').focus();
        }
})
document.getElementById('email').addEventListener('keypress',function onfocus(event){
    if(event.key=='Enter')
        {
            document.getElementById('msg').focus();
        }
})
document.getElementById('msg').addEventListener('keypress',function onfocus(event){
    if(event.key=='Enter')
        {
            event.preventDefault();
            submit();
        }
})