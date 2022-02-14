import Propietario from "./propietario.js";
import Animal from "./animal.js";
import Mascota from "./mascota.js";
import * as doc from "./elementSelectors.js";

doc.formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    doc.resultadoList.innerHTML = ""

    switch (doc.tipo.value) {
        case "perro":
            const perro = new Mascota(
                doc.propietario.value,
                doc.direccion.value,
                doc.telefono.value,
                doc.tipo.value,
                doc.nombreMascota.value,
                doc.enfermedad.value
            );
            [
                perro.datosPropietario(),
                `${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombreMascota}, y la enfermedad es: ${perro.enfermedad}`,
            ].forEach((e) => {
                let li = document.createElement("li");
                doc.resultadoList.appendChild(li);

                let text = document.createTextNode(e);
                li.appendChild(text);
            });
            break;

        case "gato":
            const gato = new Mascota(
                doc.propietario.value,
                doc.direccion.value,
                doc.telefono.value,
                doc.tipo.value,
                doc.nombreMascota.value,
                doc.enfermedad.value
            );
            [
                gato.datosPropietario(),
                `${gato.tipo}, mientras que el nombre de la mascota es: ${gato.nombreMascota}, y la enfermedad es: ${gato.enfermedad}`,
            ].forEach((e) => {
                let li = document.createElement("li");
                doc.resultadoList.appendChild(li);

                let text = document.createTextNode(e);
                li.appendChild(text);
            });
            break;

        case "conejo":
            const conejo = new Mascota(
                doc.propietario.value,
                doc.direccion.value,
                doc.telefono.value,
                doc.tipo.value,
                doc.nombreMascota.value,
                doc.enfermedad.value
            );
            [
                conejo.datosPropietario(),
                `${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombreMascota}, y la enfermedad es: ${conejo.enfermedad}`,
            ].forEach((e) => {
                let li = document.createElement("li");
                doc.resultadoList.appendChild(li);

                let text = document.createTextNode(e);
                li.appendChild(text);
            });
            break;
    }

    // const animalActual = new Mascota(
    //     doc.propietario.value,
    //     doc.direccion.value,
    //     doc.telefono.value,
    //     doc.tipo.value,
    //     doc.nombreMascota.value,
    //     doc.enfermedad.value
    // );
    // [
    //     animalActual.datosPropietario(),
    //     `${animalActual.tipo}, mientras que el nombre de la mascota es: ${animalActual.nombreMascota}, y la enfermedad es: ${animalActual.enfermedad}`
    // ].forEach((e) => {
    //     let li = document.createElement("li");
    //     doc.resultadoList.appendChild(li);

    //     let text = document.createTextNode(e);
    //     li.appendChild(text);
    // });

    doc.resultado.style.display = "flex";
    doc.resultado.style.flexDirection = "column";
    doc.resultado.style.justifyContent = "center";
    doc.resultado.style.alignItems = "center";
    doc.resultado.style.border = "black 2px solid";
    doc.resultado.style.padding = "2em";

    doc.resultadoList.style.margin = "0";
    doc.resultadoList.style.fontSize = "1.2em";
});
