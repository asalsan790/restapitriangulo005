import {Schema, model } from 'mongoose'

export class Triangulo{
    private "_nombre": string
    private _base: number
    private _lado2: number
    private _lado3: number
    private "_altura": number

    constructor(_nombre: string, _base : number, _lado2 : number, _lado3 : number
        ){
        this._nombre = _nombre
        this._base = _base
        this._lado2 = _lado2
        this._lado3 = _lado3
    //    this._altura = altura
    }
    get nombre(){
        return this._nombre
    }

    get base(){
        return this._base
    }

    get lado2(){
        return this._lado2
    }

    get lado3(){
        return this._lado3
    }

    get altura(){
        return this._altura
    }

    set altura(_altura: number){
        /*
            Si la altura no es la permitida
            levantamos una excepción con throw y su mensaje
            En otro caso asignamos la altura al triángulo
        */
        if (_altura <= 0){
            throw "Altura incorrecta, debe ser > 0"
        }
        this._altura = _altura
    }
    /*
    Si el método no puede hacer su trabajo levanta una excepción con throw
    y se interrumpe su ejecución en ese punto
    */
    perimetro(){
        let perimetro: number
        perimetro = this._base+this._lado2+this._lado3
        if (perimetro == 0){
            throw "Triángulo no creado"
        }
        return perimetro
    }

    area(){
        if (isNaN(this._altura)){
            throw "Altura no asignada"
        }
        return (this._base*this._altura)/2
    }
}

// Definimos el type

export type tTriangulo = {
    _nombre: string,
    _base: number,
    _lado2: number,
    _lado3: number,
    _altura: number
}

// Definimos el Schema
const trianguloSchema = new Schema({
    _nombre: {
        type: String,
        unique: true  // useCreateIndex: true en la conexión para que se cree el índice único
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
})

// La colección de la BD: vehiculos (Plural siempre)
export const Triangulos = model('triangulos', trianguloSchema)
