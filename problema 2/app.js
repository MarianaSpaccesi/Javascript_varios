let alumnos = [{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Física"
},{
    nombre: "Roberto Martin Saposnik",
    email: "rmartinsp@gmail.com",
    materia: "Inglés"
},{
    nombre: "Mariana Spaccesi",
    email: "marispami@gmail.com",
    materia: "Matemática"
},{
    nombre: "Miguel Salideahi",
    email: "miguelon@gmail.com",
    materia: "Lengua"
},{
    nombre: "Pocha Lacrazy",
    email: "pochipo@gmail.com",
    materia: "Psicología"
}];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");

for (alumno in alumnos) {
    let datos = alumnos[alumno]
    let nombre = datos["nombre"];
    let email = datos["email"]
    let materia = datos["materia"]
    let htmlCode= `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`
    contenedor.innerHTML += htmlCode;
}

boton.addEventListener("click", () => {
    let confirmar = confirm("¿Desea confirmar los cambios realizados?")
    if (confirmar) {
    document.body.removeChild(boton);
    let elementos = document.querySelectorAll(".semana");
    let semanaElegida = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos) {
        semana = elementos[elemento];
        semana.innerHTML = semanaElegida[elemento].value
    }
    }
})