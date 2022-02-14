class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        let _nombrePropietario = nombrePropietario;
        this.getNombrePropietario = () => _nombrePropietario;
        this.setNombrePropietario = (val) => (_nombrePropietario = val);

        let _direccion = direccion;
        this.getDireccion = () => _direccion;
        this.setDireccion = (val) => (_direccion = val);

        let _telefono = telefono;
        this.getTelefono = () => _telefono;
        this.setTelefono = (val) => (_telefono = val);
    }

    datosPropietario() {
        return `El nombre del propietario es: ${this.nombrePropietario}, su dirección es: ${this.direccion}, y su teléfono es: ${this.telefono}`;
    }

    get nombrePropietario() {
        return this.getNombrePropietario();
    }
    get direccion() {
        return this.getDireccion();
    }
    get telefono() {
        return this.getTelefono();
    }

    // set nombrePropietario(val) {
    //     this.setNombrePropietario(val);
    // }
    // set direccion(val) {
    //     this.setDireccion(val);
    // }
    // set telefono(val) {
    //     this.setTelefono(val);
    // }
}

export default Propietario;
