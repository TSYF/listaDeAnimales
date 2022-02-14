import Propietario from "./propietario.js";
import Animal from "./animal.js";

class Mascota extends Animal {
    constructor(
        nombrePropietario,
        direccion,
        telefono,
        tipo,
        nombreMascota,
        enfermedad
    ) {
        super(nombrePropietario, direccion, telefono, tipo);

        let _nombreMascota = nombreMascota;
        this.getNombreMascota = () => _nombreMascota;
        this.setNombreMascota = (val) => (_nombreMascota = val);

        let _enfermedad = enfermedad;
        this.getEnfermedad = () => _enfermedad;
        this.setEnfermedad = (val) => (_enfermedad = val);
    }

    get nombreMascota() {
        return this.getNombreMascota();
    }
    set nombreMascota(val) {
        this.setNombreMascota(val);
    }

    get enfermedad() {
        return this.getEnfermedad();
    }
    set enfermedad(val) {
        this.setEnfermedad(val);
    }
}

export default Mascota;
