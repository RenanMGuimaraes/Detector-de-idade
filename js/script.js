function verificar(){
    //Declaração de variáveis
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("#txtano");
    var res = document.querySelector("#res");
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var classif;
    var genero;
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    //Validação do ano/
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        alert('ERRO: ano inválido!') 
    } else{ //Ano válido
        res.innerHTML = `Idade calculada: ${idade}`;
        if (fsex[0].checked){
            genero = "masculino";
            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "imagens/foto-bebe-m.png");
                classif = "criança";
            }else if (idade >= 10 && idade < 21){
                img.setAttribute("src", "imagens/foto-jovem-m.png");
                classif = "jovem";
            }else if (idade >= 21 && idade < 50){
                img.setAttribute("src", "imagens/foto-adulto-m.png");
                classif = "adulto";
            }else {
                img.setAttribute("src", "imagens/foto-idoso-m.png");
                classif = "idoso";
            }
        } else{
            genero = "feminino";
            if (idade >= 0 && idade < 10){
                img.setAttribute("src", "imagens/foto-bebe-f.png");
                classif = "criança";
            }else if (idade >= 10 && idade < 21){
                img.setAttribute("src", "imagens/foto-jovem-f.png");
                classif = "jovem";
            }else if (idade >= 21 && idade < 50){
                img.setAttribute("src", "imagens/foto-adulto-f.png");
                classif = "adulto";
            }else {
                img.setAttribute("src", "imagens/foto-idoso-f.png");
                classif = "idoso";
            }
        }
        res.innerHTML = `Detectamos o gênero ${genero} ${classif} com ${idade} anos. <br>`;
        res.appendChild(img).style.marginTop = "25px";
    }
    
}

