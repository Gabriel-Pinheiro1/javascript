function verificar(){
   var data = new Date()
   var ano =  data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if(fano.value.length == 0 || fano.value >ano ){
       window.alert('ERRO. Verifique os dados e tente novamente.')
   } else{
       var fsex = document.getElementsByName('radisex')
       var idade = ano -Number(fano.value)
       var pronome =''
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       if(fsex[0].checked ){
           genero = 'Homem'
           pronome = 'um'
           if(idade >= 0 && idade < 10){
                img.setAttribute('src' , 'fotos/bebemenino.png')
           }else if(idade > 10 && idade <21){
                img.setAttribute('src' , 'fotos/homemjovem.png')
           }else if(idade > 21 && idade < 50){
                img.setAttribute('src' , 'fotos/homemadulto.png')
           }else{
                img.setAttribute('src' , 'fotos/homemidoso.png')
           }
       } else{
           genero = 'Mulher'
           pronome = 'uma'
           if(idade >= 0 && idade < 10){
                img.setAttribute('src' , 'fotos/bebemulher.png')
            }else if(idade > 10 && idade <21){
                img.setAttribute('src' , 'fotos/mulherjovem.png')
            }else if(idade > 21 && idade < 50){
                img.setAttribute('src' , 'fotos/mulheradulta.png')
            }else{
                img.setAttribute('src' , 'fotos/mulheridosa.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${pronome} ${genero} de ${idade} anos `
       res.appendChild(img)
       
   }
}
