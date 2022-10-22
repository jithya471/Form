function sub(){
    let name=document.forms['Form']['na'].value;
    let std=document.forms['Form']['Subject'].value
    let birth=document.forms['Form']['dob'].value
    let gender=document.forms['Form']['gen'].value
    if(name=="")
    {
        alert("Enter your name");
        name.focus()
        return false
    }
    else if(birth==""){
        alert("Enter your DOB");
        birth.focus()
        return false
    }
    else if(gender==""){
        alert("Select Gender")
    }
    else if(std=="")
    {
        alert("Select class")
        std.focus()
        return false
    }
    
    else{
        alert('Welcome ' + name)
    }
}
