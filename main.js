const resultado = document.getElementById("resultado")
const div1 = document.getElementById("div1")

function edad(num){
    
    if (num <= 35){
        resultado.innerHTML = `<p>Eres un chaval!</p><img src="img/joven.png" style="width: 100px;">`;
    }
    else if (num <= 65){
        resultado.innerHTML = `<p>Pero si estás en la crema de la vida!</p><img src="img/adulto.png" style="width: 100px;">`;
    }
    else {
        resultado.innerHTML = `<p>Felicidades, la sabiduría viene con el tiempo</p><img src="img/viejo.png" style="width: 100px;">`;
    }
}

function introEdad(){
    const num = parseInt(prompt("Introduce tu edad: "))
    return edad(num)
}

function cambiarTexto(){
    div1.classList.toggle("texto");
}

function cambiarFondo(){
    div1.classList.toggle("fondo");
}

function borrarImagen(){
    const imagen = resultado.querySelector("img");
    imagen.classList.toggle("oculto");
}

function mensaje(){
    let mensaje = document.getElementById("mensajeoculto");
    
    mensaje.classList.toggle("color");
    mensaje.classList.toggle("peso");
}
