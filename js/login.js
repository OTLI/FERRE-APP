const $submit = document.getElementById("submit"),
      $password = document.getElementById("password"),
      $username = document.getElementById("username"),
      $visible = document.getElementById("visible");


document.addEventListener("change", (e)=>{
    if(e.target === $visible){
        if($visible.checked===false) $password.type="password";
        else $password.type="text";
    }
});

document.addEventListener("click",(e)=>{
    if(e.target=== $submit){
        if($password.value !== "" && $username.value !== ""){
            e.preventDefault()
<<<<<<< HEAD
            window.location.href ="home.html";
=======
            window.location.href ="./pages/home.html";
>>>>>>> 596eec3 (tabla funcional)
        }
    }
});