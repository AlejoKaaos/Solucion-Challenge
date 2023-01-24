let btnEncriptar = document.querySelector(".btn-encriptar");
let btnDesencriptar = document.querySelector(".btn-desencriptar");
let btnCopiar = document.querySelector(".btn-copiar");

let imgChica = document.querySelector(".chica");
let txtH2 = document.querySelector(".no-mensaje");
let txtH3 = document.querySelector(".ingresa-texto");
let resultado = document.querySelector(".textarea2");
let textOriginal = document.querySelector (".textarea1");



//Funciones
//OCULTAR Y VISUALIZAR

function ocultarElementos(){
    imgChica.classList.add("ocultar");
    txtH2.classList.add("ocultar");
    txtH3.classList.add("ocultar");
}

function mostrarElementos(){
    let h3 = document.querySelector(".claseh4");
    let btnCopiar = document.querySelector(".btn-copiar");
    let txtarea2 = document.querySelector(".textarea2");

    h3.classList.remove("ocultar");
    btnCopiar.classList.remove("ocultar");
    txtarea2.classList.remove("ocultar");
}

//Capturar Texto

function capturarTexto(){
    let txtEntrada = document.querySelector(".textarea1").value;
    return txtEntrada;
}

//Funcion Encriptar/Desecriptar

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoResultado = "";

    for (let i = 0; i < texto.length; i++){ 
        if (texto[i] == "a"){
            textoResultado += "ai";       
        }else if(texto[i] == "e"){
            textoResultado += "enter";
        }else if(texto[i] == "i"){
            textoResultado += "imes";
        }else if(texto[i] == "o"){
            textoResultado += "ober";
        }else if(texto[i] == "u"){
            textoResultado += "ufat";
        }else{
            textoResultado += texto[i];
        }    
     }
    return textoResultado;
}

function desencriptarTexto(mensaje){ 
    let texto = mensaje;
    let textoResultado = "";

    for (let i = 0; i < texto.length;i++){ 
        if (texto[i] == "a"){
            textoResultado += "a"; i+=1;        
        }else if(texto[i] == "e"){
            textoResultado += "e"; i+=4
        }else if(texto[i] == "i"){
            textoResultado += "i"; i+=3;
        }else if(texto[i] == "o"){
            textoResultado += "o"; i+=3
        }else if(texto[i] == "u"){
            textoResultado += "u"; i+=3
        }else{
            textoResultado += texto[i];
        }    
     }
     return textoResultado;     
 }

// Copiar Texto

function copiarTexto(){
    ocultarAlCopiar();
    mostrarAlCopiar();
    textOriginal.value = capturarTexto2();
}

function capturarTexto2(){
    let texto = document.querySelector(".textarea2").value;
    return texto;
}

function ocultarAlCopiar(){
    imgChica.classList.remove("ocultar");
    txtH2.classList.remove("ocultar");
    txtH3.classList.remove("ocultar");
}

function mostrarAlCopiar(){
    let h3 = document.querySelector(".claseh4");
    let btnCopiar = document.querySelector(".btn-copiar");
    let txtarea2 = document.querySelector(".textarea2");

    h3.classList.add("ocultar");
    btnCopiar.classList.add("ocultar");
    txtarea2.classList.add("ocultar");
}
//Ejecutar

function mostrarResultadoEnc(){
    ocultarElementos();
    mostrarElementos();
    resultado.textContent = encriptarTexto(capturarTexto());
}
function    
mostrarResultadoDes(){
    ocultarElementos();
    mostrarElementos();
    resultado.textContent = desencriptarTexto(capturarTexto());
}


//Botones

btnEncriptar.addEventListener("click", mostrarResultadoEnc);
btnDesencriptar.addEventListener("click", mostrarResultadoDes)
btnCopiar.addEventListener("click", copiarTexto)