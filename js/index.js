function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date
var hora = data.getHours()
msg.innerHTML= `Agora são ${hora}horas`
    if(hora>=5 && hora<=12){
        img.src = './img/fotomanha.png'
        document.body.style.background = '#dee6cd'
        document.body.style.transitionDuration = "2s"
    }else if(hora>=13 && hora<18){
        img.src ='./img/fototarde.png'
        document.body.style.background = '#bf7d75'
        document.body.style.transitionDuration = "2s"
    }else{
        img.src ='./img/fotonoite.png'
        document.body.style.background = '#161F30'
        document.body.style.transitionDuration = "2s"
}
}