var users = [
    {
        name:"john",
        password:"john123"
    },
    {
        name:"pushkar",
        password:"pushkar123"
    },
    {
        name:"singh",
        password:"singh123"
    }
]
function log(){
    uname = username.value;
    pswd = password.value;
    users.forEach((user)=> {
        if(user.name==uname&& user.password==pswd)
        {
            console.log("success");
            document.getElementById('log').style.display="none";
            document.getElementById('chatapp').style.display='flex';
        }
        
    });
}
function ch(){
    var m = document.getElementById('msgbox').value;  
    var msg = document.getElementById('msg'); 

    if(m.trim() !== '') {  
      var li = document.createElement('li');  
      li.innerHTML = m;                      
      li.classList.add('msgText');            
      msg.appendChild(li);                    
      msg.appendChild(br)
      chatbox.scrollTop=chatbox.scrollHeight;
      document.getElementById('msgbox').value = '';  
    }
    else{
        alert('Enter Chat')
        return;
    }
  }
    


