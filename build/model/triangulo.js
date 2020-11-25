"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulos = exports.Triangulo = void 0;
const mongoose_1 = require("mongoose");
class Triangulo {
    constructor(_nombre, _base, _lado2, _lado3) {
        this._nombre = _nombre;
        this._base = _base;
        this._lado2 = _lado2;
        this._lado3 = _lado3;
        //    this._altura = altura
    }
    get nombre() {
        return this._nombre;
    }
    get base() {
        return this._base;
    }
    get lado2() {
        return this._lado2;
    }
    get lado3() {
        return this._lado3;
    }
    get altura() {
        return this._altura;
    }
    set altura(_altura) {
        /*
            Si la altura no es la permitida
            levantamos una excepción con throw y su mensaje
            En otro caso asignamos la altura al triángulo
        */
        if (_altura <= 0) {
            throw "Altura incorrecta, debe ser > 0";
        }
        this._altura = _altura;
    }
    /*
    Si el método no puede hacer su trabajo levanta una excepción con throw
    y se interrumpe su ejecución en ese punto
    */
    perimetro() {
        let perimetro;
        perimetro = this._base + this._lado2 + this._lado3;
        if (perimetro == 0) {
            throw "Triángulo no creado";
        }
        return perimetro;
    }
    area() {
        if (isNaN(this._altura)) {
            throw "Altura no asignada";
        }
        return (this._base * this._altura) / 2;
    }
}
exports.Triangulo = Triangulo;
// Definimos el Schema
const trianguloSchema = new mongoose_1.Schema({
    _nombre: {
        type: String,
        unique: true // useCreateIndex: true en la conexión para que se cree el índice único
    },
    _base: {
        type: Number,
        max: 200
    },
    _lado2: Number,
    _lado3: Number,
    _altura: {
        type: Number,
        min: 5
    }
});
// La colección de la BD: vehiculos (Plural siempre)
exports.Triangulos = mongoose_1.model('triangulos', trianguloSchema);
