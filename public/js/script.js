const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");

checktheusername()

function checktheusername(){
    if (localStorage.getItem('nickname')===null){
        document.getElementById("username").innerHTML = "Guest"
    }else{
        document.getElementById("username").innerHTML = localStorage.getItem('nickname')
        if (localStorage.getItem('nickname')==="AldessSc"){
            document.getElementById("grade").innerHTML = "CEO"
        }
    }
}

function setusername(){
    let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans le tchat. Veuillez éviter les caractères spéciaux")
        if (result===null){
            localStorage.setItem('nickname', "Guest")
        }else{
            localStorage.setItem('nickname', result)
        }
        
}