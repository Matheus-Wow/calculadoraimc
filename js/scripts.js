function calcularIMC() {

    const name = document.getElementById("name").value;
    
    let sexo = "";

    const altura = parseFloat(document.getElementById("altura").value);
    
    const peso = parseFloat(document.getElementById("peso").value);
    
    const checkRadio = document.getElementsByName("genero");
    checkRadio.length;

    if (checkRadio[0].checked == true)
    {
        sexo = "M";
    }
    else
    {
        sexo = "F";
    }

    let resultado = "";
    
    const IMC = parseFloat(peso / (altura * altura));

    if (sexo == "M")
    {
        if (IMC < 20.7)
        {
            resultado = "Voce esta abaixo do peso!";
        }

        else if (IMC >= 20.7 && IMC < 26.4)
        {
            resultado = "Voce esta com peso normal.";
        }

        else if (IMC >= 26.4 && IMC < 27.8)
        {
            resultado = "Voce esta marginalmente acima do peso.";
        }

        else if (IMC >= 27.8 && IMC < 31.1)
        {
            resultado = "Voce esta acima do peso ideal.";
        }

        else if (IMC > 31.1)
        {
            resultado = "Voce esta obeso.";  
        }
    }
    else if (sexo == "F")
    {
        if (IMC < 19.1)
        {
            resultado = "Voce esta abaixo do peso!";
        }

        else if (IMC >= 19.1 && IMC < 25.8)
        {
            resultado = "Voce esta com peso normal.";
        }

        else  if (IMC >= 25.8 && IMC < 27.3)
        {
            resultado = "Voce esta marginalmente acima do peso.";
        }

        else if (IMC >= 27.3 && IMC < 32.3)
        {
            resultado = "Voce esta acima do peso ideal.";
        }

        else if (IMC > 32.3)
        {
            resultado = "Voce esta obeso.";
        }
    }
    document.getElementById("informacaoIMC").innerHTML = resultado;

    
}