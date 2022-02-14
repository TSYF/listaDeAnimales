import Propietario from "./propietario.js";

class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);

        let _tipoAnimal = tipo;

        this.getTipoAnimal = () => _tipoAnimal;
    }

    get tipo() {
        return "El animal es un " + this.getTipoAnimal();
    }
}

export default Animal;
