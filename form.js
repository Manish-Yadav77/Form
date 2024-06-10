function reset()
{
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let msg=document.getElementById("msg")
    if(name.value==""||email.value==""||msg.value=="")
        {
            alert("please enter all details")
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
    if(name.value==""||email.value==""||msg.value=="")
        {
            alert("please enter all details")
        }
        else{
            // localStorage.setItem("Details : ", obj.name+" " +obj.email+" "+obj.msg)
            // console.log(obj)
            localStorage.setItem("name : ",name.value)
            localStorage.setItem("email : ",email.value)
            localStorage.setItem("msg : ",msg.value)
            name.value=""
            email.value=""
            msg.value="" 
        }
}